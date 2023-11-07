function agregarElemento() {
    const nuevoElemento = document.getElementById('nuevoElemento').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const elementoSeleccionado = document.getElementById('elementos').value;
  
    const nuevoItem = document.createElement('li');
    nuevoItem.className = 'list-group-item';
    nuevoItem.textContent = nuevoElemento;
  
    const listaElementos = document.getElementById('listaElementos');
  
    document.addEventListener('DOMContentLoaded', () => {
      if (ubicacion === 'antesDe' || ubicacion === 'despuesDe') {
        const elemento = document.querySelector('[value="' + elementoSeleccionado + '"]');
        if (elemento) {
          const index = listaElementos.indexOf(elemento);
          if (ubicacion === 'antesDe') {
            listaElementos.insertBefore(nuevoItem, listaElementos.childNodes[index]);
          } else {
            listaElementos.insertBefore(nuevoItem, listaElementos.childNodes[index + 1]);
          }
        }
      }
    });
  
    actualizarListaElementos(); // Llamar a la función para actualizar la lista de elementos
  }
  
  function actualizarListaElementos() {
    const elementos = document.getElementById('elementos');
    const listaElementos = document.getElementById('listaElementos');
    listaElementos.innerHTML = ''; // Limpiar la lista actual
  
    const items = elementos.getElementsByTagName('option');
    for (let item of items) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = item.value;
      listaElementos.appendChild(li);
    }
  }
  