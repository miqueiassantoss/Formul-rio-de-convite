// Seleciona todas as bolinhas
const colorElements = document.querySelectorAll(".color");

// Adiciona o evento de clique
colorElements.forEach((color) => { //itera sobre cada bolinha, a cada iteração a variável color representa uma bolinha
  color.addEventListener("click", () => {

    //Ao ser clicado, se tiver a classe, retire
    if (color.classList.contains("selected")) {
      color.classList.remove("selected");
    }

      //Ao ser clicado, se tiver a classe, remova
      else {
      color.classList.add("selected")
    }
  });
});


