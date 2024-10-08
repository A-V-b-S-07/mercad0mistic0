async function cadastrar(event){
    event.preventDefault();

    const nome = document.getElementById("nome_produtos").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    const data = {
        nome,
        preco,
        quantidade
    }

    console.log(data);

    const response = await fetch('http://localhost:3000/produtos/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if(results.success){
        console.log(results)
        alert(results.message)
    }else{
        alert(results.message)

    }
}


let menu = document.querySelector("#div1")
let botaomenu = document.querySelector(".menu")
let fechar2 = document.querySelector("#fechar-modal")

botaomenu.addEventListener("click", (e) =>{
    menu.style.display = "flex"
  })
  fechar2.addEventListener("click", (e) =>{
    menu.style.display = "none"
  })



