let ultimasFilasAgregadas = [];

function agregarNombre(nombreNuevo, idTabla, posicion) {
  const regex = /^[0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/;

  if (nombreNuevo === '' || !regex.test(nombreNuevo)) {
    alert('Ingresa un nombre válido (números y símbolos).');
    return;
  }

  const filaNueva = document.createElement('tr');
  const celdaNombre = document.createElement('td');

  if (nombreNuevo === '') {
    celdaNombre.textContent = '';
  } else {
    celdaNombre.textContent = nombreNuevo;
  }

  filaNueva.appendChild(celdaNombre);

  const tabla = document.getElementById(idTabla);

  if (posicion === 'alinicio') {
    tabla.insertBefore(filaNueva, tabla.firstChild);
    ultimasFilasAgregadas.unshift(filaNueva);
  } else if (posicion === 'alfinal') {
    tabla.appendChild(filaNueva);
    ultimasFilasAgregadas.push(filaNueva);
  } else if (posicion === 'antesde' || posicion === 'despuesde') {
    const nombreRef = document.getElementById('nombre2').value.trim();
    const filas = tabla.getElementsByTagName('tr');
    let filaReferencia = null;

    for (let i = 0; i < filas.length; i++) {
      if (filas[i].textContent.trim() === nombreRef) {
        filaReferencia = filas[i];
        break;
      }
    }

    if (filaReferencia) {
      if (posicion === 'antesde') {
        tabla.insertBefore(filaNueva, filaReferencia);
        ultimasFilasAgregadas.splice(ultimasFilasAgregadas.indexOf(filaReferencia), 0, filaNueva);
      } else {
        if (filaReferencia.nextSibling) {
          tabla.insertBefore(filaNueva, filaReferencia.nextSibling);
          ultimasFilasAgregadas.splice(ultimasFilasAgregadas.indexOf(filaReferencia.nextSibling), 0, filaNueva);
        } else {
          tabla.appendChild(filaNueva);
          ultimasFilasAgregadas.push(filaNueva);
        }
      }
    } else {
      alert('Nombre de referencia no encontrado');
    }
  }
}

function eliminarUltimoAgregado(idTabla) {
  if (ultimasFilasAgregadas.length > 0) {
    const tabla = document.getElementById(idTabla);
    const ultimaFilaAgregada = ultimasFilasAgregadas.pop();
    tabla.removeChild(ultimaFilaAgregada);
  } else {
    alert('No hay nombres para eliminar');
  }
}

function eliminarPrimero(idTabla) {
  const tabla = document.getElementById(idTabla);
  const primeraFila = tabla.querySelector('tr');

  if (primeraFila) {
    tabla.removeChild(primeraFila);
  } else {
    alert('No hay nombres para eliminar');
  }
}

function eliminarUltimo(idTabla) {
  const tabla = document.getElementById(idTabla);
  const tbody = tabla.querySelector('tbody');
  const ultimaFila = tbody.querySelector('tr:last-child');

  if (ultimaFila) {
    tabla.removeChild(ultimaFila);
  } else {
    alert('No hay nombres para eliminar');
  }
}

function eliminarNombre(idTabla) {
  const nombreEliminar = document.getElementById('dato3').value.trim();
  if (nombreEliminar === '') {
    alert('Ingresa un nombre para eliminar.');
    return;
  }

  const tabla = document.getElementById(idTabla);
  const filas = tabla.getElementsByTagName('tr');

  for (let i = 0; i < filas.length; i++) {
    if (filas[i].textContent.trim() === nombreEliminar) {
      tabla.removeChild(filas[i]);
      return;
    }
  }
  alert('Nombre no encontrado');
}

function borrarTodos() {
  const tabla = document.getElementById('nombres');
  if (ultimasFilasAgregadas.length > 0) {
    tabla.innerHTML = '';
    ultimasFilasAgregadas = [];
  } else {
    alert('No hay elementos para borrar');
  }
}

function vaciarCasillas() {
  const dato1 = document.getElementById('dato1').value;
  const nombre2 = document.getElementById('nombre2').value;
  const dato3 = document.getElementById('dato3').value;

  if (dato1 || nombre2 || dato3) {
    document.getElementById('dato1').value = '';
    document.getElementById('nombre2').value = '';
    document.getElementById('dato3').value = '';
  } else {
    alert('Las casillas ya están vacías');
  }
}
