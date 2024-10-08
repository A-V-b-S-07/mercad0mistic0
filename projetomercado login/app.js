const { json } = require("express/lib/response");

// Selecionando os elementos de Signin e Signup
let btnSignin = document.querySelector("#signin");
let btnSignup = document.querySelector("#signup");
let body = document.querySelector("body");

// Selecionando o menu e botões de abrir/fechar
let menu = document.querySelector("#div1");
let botaomenu = document.querySelector(".menu");
let fechar2 = document.querySelector("#fechar-modal");

botaomenu.addEventListener("click", () => {
  menu.style.display = "flex";
});

fechar2.addEventListener("click", () => {
  menu.style.display = "none";
});

// Função para cadastrar um usuário
async function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const data = { nome, email, senha };



  const response = await fetch("http://localhost:3000/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const results = await response.json();

  if (results.success) {
    alert(results.message);
  } else {
    alert(results.message);
    alert("Erro ao tentar cadastrar o usuário.")
  }
  // }  (error) {
  //   console.error("Erro ao cadastrar:", error);
  //   ;
  // }
}
// Função para login

async function logar(event) {
  event.preventDefault();

  const email = document.getElementById("email_login").value;
  const senha = document.getElementById("senha_login").value;

  const data = { email, senha };

  console.log(data)

  try {
    const response = await fetch('http://localhost:3000/logar', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let results = await response.json();




    if (results.success) {

      let usuarioData = results;
      localStorage.setItem('informacoes', JSON.stringify(usuarioData));
      alert(results.message); // Alerta antes do redirecionamento

    } else {
      alert(results.message);
    }
  } catch (error) {
    console.error("Erro ao logar:", error);
    alert("Erro ao tentar fazer login.");
  }
};


// Carregando as informações ao carregar a página
window.addEventListener("load", () => {
  if (localStorage.getItem("informacoes")) {
    let html = document.getElementById("informacoes");
    let dados = JSON.parse(localStorage.getItem("informacoes"));
    let perfil = dados.data.perfil;
    console.log(dados.data.perfil);


    // if(perfil === "admin"){
    //   document.getElementById('cadastrar_produto').style.display = 'block'
    //   document.getElementById('informacoes').style.display = 'block'
    // }
    // else{
    //   document.getElementById('cadastrar_produto').style.display = 'none'
    //   document.getElementById('informacoes').style.display = 'none'
    // }

    html.innerHTML = `<div style='display: block; flex-direction: column; align-items: end; color: #fff'>
                      id: ${dados.data.id} nome: ${dados.data.nome} email: ${dados.data.email} status: ${dados.data.perfil}
                     </div>`;

    html.style.display = "block";
  }
});
// Carregando as informações ao carregar a página




// Função para cadastrar um produto

// async function cadastrarProduto(event) {
//   event.preventDefault();

//   const title = document.getElementById("title").value;
//   const price = Number(document.getElementById("price").value);
//   const file = document.getElementById("file").files[0];

//   let formData = new FormData();
//   formData.append("title", title);
//   formData.append("price", price);
//   formData.append("file", file);

//   try {
//     const response = await fetch("http://localhost:3000/produtos/cadastrar/admin", {
//       method: "POST",
//       body: formData
//     });

//     const results = await response.json();

//     if (results.success) {
//       alert(results.message);
//     } else {
//       alert(results.message);
//     }
//   } catch (error) {
//     console.error("Erro ao cadastrar produto:", error);
//     alert("Erro ao tentar cadastrar o produto.");
//   }
// }
async function cadastrarProduto(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const price = Number(document.getElementById("price").value);
  const file = document.getElementById("file").files[0];

  let formData = new FormData();
  formData.append("title", title);
  formData.append("price", price);
  formData.append("image", file);

  try {
    const response = await fetch("http://localhost:3000/produtos/cadastrar/admin", {
      method: "POST",
      body: formData
    });

    // Verifique se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na rede: ${response.status} ${response.statusText}`);
    }

    // Tente analisar a resposta como JSON
    const results = await response.json();

    if (results.success) {
      alert(results.message);
    } else {
      alert(results.message);
    }
  } catch (error) {
    console.error("Erro ao cadastrar produto:", error);
    alert("Erro ao tentar cadastrar o produto.");
  }
}


async function listarProdutos() {
  const response = await fetch('http://localhost:3000/produtos/listar/admin', {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const results = await response.json()

  if (results.success) {
    let productData = results.data
    const images = 'http://localhost:3000/uploads'
    let html = document.getElementById('card_produto')

    productData.array.forEach(product => {
      let card = `   <div
            style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <img src="${images + product.image}" alt="" width="50px" height="50px">
            <p>${product.title}</p>
            <span>${product.price}</span></div>`

      html.innerHTML += card
    });
  } else {

  }
};

