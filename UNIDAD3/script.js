let ultimasFilasAgregadas = []; // Variable para almacenar las últimas filas agregadas

function agregarNombre(nombreNuevo, idTabla, posicion) {
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
    ultimasFilasAgregadas.unshift(filaNueva); // Agregar al principio del array
  } else if (posicion === 'alfinal') {
    tabla.appendChild(filaNueva);
    ultimasFilasAgregadas.push(filaNueva); // Agregar al final del array
  } else if (posicion === 'antesde' || posicion === 'despuesde') {
    const nombreRef = document.getElementById('nombre2').value.trim();
    const filas = tabla.getElementsByTagName('tr');
    let filaReferencia = null;

    // Buscar la fila de referencia según el valor del campo de entrada nombre2
    for (let i = 0; i < filas.length; i++) {
      if (filas[i].textContent.trim() === nombreRef) {
        filaReferencia = filas[i];
        break;
      }
    }

    if (filaReferencia) {
      if (posicion === 'antesde') {
        tabla.insertBefore(filaNueva, filaReferencia);
        ultimasFilasAgregadas.splice(ultimasFilasAgregadas.indexOf(filaReferencia), 0, filaNueva); // Insertar antes de la fila de referencia
      } else {
        if (filaReferencia.nextSibling) {
          tabla.insertBefore(filaNueva, filaReferencia.nextSibling);
          ultimasFilasAgregadas.splice(ultimasFilasAgregadas.indexOf(filaReferencia.nextSibling), 0, filaNueva); // Insertar después de la fila de referencia
        } else {
          tabla.appendChild(filaNueva);
          ultimasFilasAgregadas.push(filaNueva); // Agregar al final del array si no hay una fila después de la referencia
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
    const ultimaFilaAgregada = ultimasFilasAgregadas.pop(); // Obtener y quitar la última fila del array
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
  const tabla = document.getElementById(idTabla);
  const filas = tabla.getElementsByTagName('tr');

  for (let i = 0; i < filas.length; i++) {
    if (filas[i].textContent.trim() === nombreEliminar) {
      tabla.removeChild(filas[i]);
      return; // Termina la función después de eliminar la primera coincidencia
    }
  }
  alert('Nombre no encontrado');
}


function cerrarSesion() {
  window.location.href = 'ruta_index';
}

function cerrarSesion() {
  window.location.href = 'ruta_index';
}