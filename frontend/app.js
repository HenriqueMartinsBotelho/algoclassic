// document.querySelector("body").style.backgroundColor = "green";

window.onload = function () {
  let dados = {
    bubble: ["10", "2", "12"],
    selectionSort: ["33", "22", "11"],
  };
  if (!localStorage.getItem("dados")) {
    localStorage.setItem("dados", JSON.stringify(dados));
  } else {
    console.log("Localstorage já tem itens");
  }
  let data = JSON.parse(localStorage.getItem("dados"));
  document.querySelector("#bubble_acertos").innerText = data.bubble[0];
};
