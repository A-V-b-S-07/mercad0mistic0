let carta = document.querySelector(".carta");
let carta2 = document.querySelector(".carta2");
let texto1 = document.querySelector(".texto1")
let fechar = document.querySelector(".fechar")
let menu = document.querySelector("#div1")
let botaomenu = document.querySelector(".menu")
let fechar2 = document.querySelector("#fechar-modal")


carta.addEventListener('click', (e) =>{
    carta2.style.display = "flex"
    carta.style.display = "none"
    texto1.style.display = "flex"
    fechar.style.display = "flex"
  }
  )
fechar.addEventListener("click" , (e) => {
    carta2.style.display = "none"
    carta.style.display = "flex"
    texto1.style.display = "none"
    fechar.style.display= "none"
}) 

botaomenu.addEventListener("click", (e) =>{
  menu.style.display = "flex"
})
fechar2.addEventListener("click", (e) =>{
  menu.style.display = "none"
})

