function listarPersonas () {  //estos parentesis se refieren al parametro de los datos
  var personas = [{ nombre: 'Carlos', apellido: 'Ruiz'},
                  { nombre: 'Maria', apellido: 'Perez' }]
  var table = document.getElementById('people-table')
  for (var i = 0; i < personas.length; i++) {
    var row = table.insertRow(1)
    var cell0 = row.insertCell (0)
    var cell1 = row.insertCell (1)
    cell0.innerHTML = personas[i].nombre
    cell1.innerHTML = personas[i].apellido
  }
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
            if (confirm("¿Seguro deseas eliminar de la lista a esa persona?") == true) {
        x = document.getElementById("mitabla").deleteRow(i);}
        else {
        x = "Cancelar";
    }
}




function raizcuadrada() {
  var nroot = prompt("Escribe un número para conocer su raiz cuadrada")
  if (nroot != null){
    resultado = Math.sqrt(nroot)
    alert('La raíz cuadrada de ' + nroot + 'es ' + resultado)
  }
}
