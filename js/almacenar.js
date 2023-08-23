const buttonAdd = document.getElementById("agregar");
const buttonRemove = document.getElementById("limpiar");
const container = document.getElementById("contenedor");
const inputParagraph = document.getElementById("item");
const arrayItems = JSON.parse(localStorage.getItem('items')) || [];

document.addEventListener('DOMContentLoaded', () => {
  for (const item of arrayItems) {
    container.innerHTML += `<li class="list-group-item">${item}</li>`
  }
})

buttonAdd.addEventListener("click", function () {
  if (inputParagraph.value) {
    subirALs();
    agregarLi();
    inputParagraph.value = "";
  } else {                                                                                                          
    alert("Debe ingresar algún texto para ser ingresado")
  }
});

function agregarLi(){
  container.innerHTML += `<li class="list-group-item">${arrayItems[arrayItems.length-1]}</li>`
}

function subirALs(){
  arrayItems.push(inputParagraph.value);
  localStorage.setItem('items',JSON.stringify(arrayItems));
}

buttonRemove.addEventListener("click", function () {
  container.innerHTML = "";
  localStorage.clear();
  arrayItems.splice(0, arrayItems.length);
}); 