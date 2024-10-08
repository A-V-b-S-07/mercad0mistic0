# Mercado mistico

## Discrição 

O mercado mistico é um site de compras de produtos magicos, nele é possivel navegar pelas paginas entre a pagina inicial, catalogo, carrinho e login. Na pagina inicial temos uma introdução sobre o que pode se encontrar no site, o catalogo apresenta nossos produtos, enquanto no carrinho pode ser selecionado o produto e sua quantidade pra efetivar a crompra.


## Modo de uso

Para começarmos é necessário abrirmos o git bash, depois disso, de os comando:
1. npm init -y
2. npm i express (Valide na aplicação o express dentro do package.jason e o configure -> "scripts": {
    trocar o test pelo start -> "start": "nodemon ./src/server.js"
})
3. npm i express nodemon dotenv mysql2 cors
    
Após isso instalado, teste para ver se a porta e o banco estão conectados:
4. npm start

### Rotas 

* IMPORTANTE:
    Ultiliza o thunder client
    Para testar qualque rota, após feito a especificação, aperte 'send', para verificar ou excluir (a ação depende do metodo)


Usuario 
 * Rota:
 cadstrar:  
 
 post: http://localhost:3007/usuarios/cadastrar
 colocar: (fazer login): {"nome", "email", "senha"}
 exemplo: {"Agnes", "agneschmidt@gmail.com", "z0e24"}

 delete: http://localhost:3007/usuarios/deletar
 colocar DELETE 

 get: http://localhost:3007/usuarios/listar
 colocar: GET

 put: http://localhost:3007//usuarios/alterar/:id
 colocar: PUT (assim sendo possivel alterar o login antes feito)




Produto  
 * Rota: 
 cadastrar:

 post: http://localhost:3007/produtos/cadastrar
 colocar: (fazer login): {"nome do produto", "preço", "quantidade"}
 exemplo: {"Adaga do Duende", "R$1.500,00", "1"}

 delete: http://localhost:3007/produtos/deletar
 colocar: DELETE 

 get: http://localhost:3007/produtos/listar
 colocar: GET

 put: http://localhost:3007/produtos/alterar/3
colocar: PUT (assim sendo possivel alterar o produto cadastrado)