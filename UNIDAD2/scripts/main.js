 // Función para generar un arreglo aleatorio
 function generarArreglo() {
    var arreglo = [];
    for (var i = 0; i < 10; i++) {
      var numero = Math.floor(Math.random() * 201) - 100;
      var letra = String.fromCharCode(97 + i);
      arreglo.push(letra + ") " + numero);
    }
    return arreglo;
  }

  // Función para ordenar un arreglo con el método de Burbuja
  function ordenarBurbuja(arreglo) {
    var n = arreglo.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        // Extraer números de las cadenas
        var numero1 = parseInt(arreglo[j].split(") ")[1]);
        var numero2 = parseInt(arreglo[j + 1].split(") ")[1]);
        if (numero1 > numero2) {
          // Intercambiar elementos
          var temp = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = temp;
        }
      }
    }
  }

  function ordenarShell(arreglo) {
    var n = arreglo.length;
    for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (var i = gap; i < n; i += 1) {
        var temp = arreglo[i];
        var j;
        for (
          j = i;
          j >= gap &&
          parseInt(arreglo[j - gap].split(") ")[1]) >
            parseInt(temp.split(") ")[1]);
          j -= gap
        ) {
          arreglo[j] = arreglo[j - gap];
        }
        arreglo[j] = temp;
      }
    }
  }
  // Mostrar el arreglo en el contenedor
  function mostrarArreglo(arreglo) {
    var contenedor = document.getElementById("contenedor");
    var lista =
      "<ul>" +
      arreglo
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("") +
      "</ul>";
    contenedor.innerHTML = lista;
    contenedor.style.height = "auto";
  }

  //Funciones para buscar

  // Función para buscar de manera secuencial
  function buscarSecuencial(numero) {
    for (var i = 0; i < arreglo.length; i++) {
      var numeroArreglo = parseInt(arreglo[i].split(") ")[1]);
      if (numeroArreglo === numero) {
        return i;
      }
    }
    return -1;
  }

  // Función para buscar utilizando el método de búsqueda binaria
  function buscarBinaria(numero) {
    var arregloOrdenado = arreglo.slice(); // Crear una copia del arreglo original
    ordenarBurbuja(arregloOrdenado); // Ordenar la copia del arreglo

    var izquierda = 0;
    var derecha = arregloOrdenado.length - 1;
    while (izquierda <= derecha) {
      var medio = Math.floor((izquierda + derecha) / 2);
      var numeroMedio = parseInt(arregloOrdenado[medio].split(") ")[1]);
      if (numeroMedio === numero) {
        var indiceOriginal = arreglo.indexOf(arregloOrdenado[medio]); // Encontrar el índice correspondiente en el arreglo original
        return indiceOriginal;
      }
      if (numeroMedio < numero) {
        izquierda = medio + 1;
      } else {
        derecha = medio - 1;
      }
    }
    return -1;
  }

  // Generar un arreglo al cargar la página
  var arreglo = generarArreglo();
  mostrarArreglo(arreglo);

  // Event listener para generar un nuevo arreglo
  document
    .getElementById("generarArreglo")
    .addEventListener("click", function () {
      arreglo = generarArreglo();
      mostrarArreglo(arreglo);
    });

  // Event listener para ordenar metodo de Burbuja
  document
    .getElementById("ordenarBurbuja")
    .addEventListener("click", function () {
      ordenarBurbuja(arreglo);
      mostrarArreglo(arreglo);
    });

  // Event listener para ordenar metodo de Shell
  document
    .getElementById("ordenarShell")
    .addEventListener("click", function () {
      ordenarShell(arreglo);
      mostrarArreglo(arreglo);
    });

  //Parte de busqueda
  document
    .getElementById("busquedaSecuencialBtn")
    .addEventListener("click", function () {
      var numeroBusqueda = parseInt(
        document.getElementById("numeroBusqueda").value,
        10
      );
      var indice = buscarSecuencial(numeroBusqueda);
      if (indice !== -1) {
        document.getElementById("resultadoBusqueda").textContent =
          "El número " +
          numeroBusqueda +
          " se encuentra en la posicion " +
          indice +
          ".";
      } else {
        document.getElementById("resultadoBusqueda").textContent =
          "El número " + numeroBusqueda + " no se encuentra en el arreglo.";
      }
    });

  document
    .getElementById("busquedaBinariaBtn")
    .addEventListener("click", function () {
      var numeroBusqueda = parseInt(
        document.getElementById("numeroBusqueda").value,
        10
      );
      var indice = buscarBinaria(numeroBusqueda);
      if (indice !== -1) {
        document.getElementById("resultadoBusqueda").textContent =
          "El número " +
          numeroBusqueda +
          " se encuentra en la posición " +
          indice +
          ".";
      } else {
        document.getElementById("resultadoBusqueda").textContent =
          "El número " + numeroBusqueda + " no se encuentra en el arreglo.";
      }
    });