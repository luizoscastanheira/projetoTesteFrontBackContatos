// Exemplo de API

// Importando bibliotecas
import express from "express";
import cors from "cors";

// Criando e configurando servidor
const app = express();

app.use(cors()); // Configuração do cors
app.use(express.json()); // Configurando para trabalhar com JSON de forma "natural"

// Coelção de Dados para teste

const contatos = [
    {id:1, nome:"Luiz", idade:49, telefone:"12 345678"}
];


// Configurando Endpoints

// Listando contatos
app.get("/", (req, res)=>{
    console.log(contatos);

    res.status(200).json(contatos);
});

// Inserindo contatos
app.post("/", (req, res) =>{
    let user = req.body
    console.log(user);

    contatos.push(user)

    res.status(201).json(user);
});

// Informações do sistema
app.get("/info", (req, res) => {
    res.send("Estou online!");
});

// Configurando Porta e Escuta
app.listen(8080, () => {
    let data = new Date();
    console.log(`O servidor entrou online em ${data}`);
});

