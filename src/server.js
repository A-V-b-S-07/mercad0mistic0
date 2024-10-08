const express = require("express");
const cors = require("cors");

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, ()=> console.log ("rodando na porta" + port));

const connection = require('./db.config.js');
const upload = require("./multer");

app.post('/usuarios/cadastrar', (request, response) => {
    let params = [
        request.body.nome,
        request.body.email,
        request.body.senha
    ]

    let query = "INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?);";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {    
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.get('/usuarios/listar', (request, response) => {
    let query = "SELECT * FROM usuarios";
    connection.query(query, (err, results) =>{
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
});

app.put('/usuarios/alterar/:id', (request, response) => {
    let params = Array(
        request.params.id,
        request.body.nome,
        request.body.email,
        request.body.senha
)

    let query = "UPDATE usuarios SET nome = (?),email = (?), senha = (?)";
    connection.query(query, params, (err, results) =>{
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
})
app.post('/produtos/cadastrar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.preco,
        request.body.quantidade
)

    let query = "INSERT INTO produtos(nome, preco, quantidade) VALUES (?, ?, ?);";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {    
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});
app.put('/produtos/alterar/:id', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.preco,
        request.body.quantidade,
        request.params.id
    )

    let query = "UPDATE produtos SET nome = (?), preco = (?), quantidade = (?) WHERE id = (?)";
    connection.query(query, params, (err, results) =>{
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
})

app.delete("/usuarios/deletar/:id", (request, response) => {
    let params = Array(
        request.params.id
    )
    let query = "DELETE FROM usuarios WHERE id = (?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {    
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
})

app.get('/produtos/listar', (request, response) => {
    let query = "SELECT * FROM produtos";
    connection.query(query, (err, results) =>{
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
});

app.delete("/produtos/deletar/:id", (request, response) => {
    let params = Array(
        request.params.id
    )
    let query = "DELETE FROM produtos WHERE id = (?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {    
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
})

app.post("/logar", (request, response) => {
    let params = Array(
        request.body.email
    )
    let query = "SELECT id,nome,email,senha,status FROM usuarios WHERE email = ?";

    connection.query(query, params, (err, results) => {
        if(results.length > 0){
            let senhaDigita = request.body.senha
            let senhaBanco = results[0].senha

            if (senhaBanco === senhaDigita){
                
                response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results[0]
                })
            }else{
                response
            .status(400)
            .json({
                success: false,
                message: "Verifique sua senha!",
                data: results[0] 
         })

            }
            
             
        }else {
            response
            .status(400)
            .json({
                success: false,
                message: "E-mail não cadastrado",
                data: results[0] 
         })
        }
        
    })
})

app.post("/produto/cadastrar/admin", (request, respopnse) => {
    let params = Array(
        request.body.title,
        request.body.price,
        request.body.image.file.filename
    )

    let query = "INSERT INTO products(title, price, image) VALUES(?,?,?)";

   connection.query(query, params, (err, results) =>{
    if (results){
        response
        .status(201)
        .json({
            success: true,
            message: "Sucesso!",
            data: results

        })

    } else{
        response
        .status(400)
        .json({
            success: false,
            message: "Sem sucesso!",
            data: err
        })

    }
   })
})

app.use('/uploads', express.static(__dirname + '\\public'))

app.get('/produtos/listar/admin', (request, response) =>{
    let query = "SELECT * FROM products";
    connection.query(query, (err, results) => {
        if (results){
            response
            .status(201)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
    
            })
    
        } else{
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso!",
                data: err
            })
    
        }
    })
})
