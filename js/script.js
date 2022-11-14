{
const welcome = () => {
  console.log("Hi there, (❁´◡`❁)");
}
welcome();


const onChangeBackgoundClick = () => {
article.classList.toggle("article" , "blue");
let blue = document.querySelector(".js-blue")
let article = document.querySelector(".article");

};

const init = () => {
const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton"); 
changeBackgroundButton.addEventListener("click", onChangeBackgoundClick);
}
init();

}




let button = document.querySelector(".button");
let footer__header = document.querySelector(".footer__header");

button.addEventListener("click", () => {
  if (footer__header.innerText === "e-mail") {
    footer__header.innerText = "maja@poczta.pl";
  } else {
    footer__header.innerText === "maja@poczta.pl";
    footer__header.innerText = "e-mail";
  }
  if (button.innerText === "Pokaż") {
    button.innerText = "Ukryj";
  } else {
    button.innerText === "Ukryj";
    button.innerText = "Pokaż";
  }
});
