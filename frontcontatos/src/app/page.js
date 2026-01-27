"use client";

import { useState, useEffect } from "react";

import estilos from "./page.module.css";
import axios from "axios";

// Váriável onde está minha api
const api = axios.create({
  baseURL: 'http://localhost:8080'
});

export default function Home() {
  // criando um variável de estado que vai listar os usuários vindos da API
  const [users, setUsers] = useState([]) // meu useState recebendo um array
  // criando variáveis de estado para cada campo de usário
  const [id, setId] = useState(""); 
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");

  // acessando um endpoint do servidor com metodo get que o axios fornece 
  // o .then seria tipo "se tudo der certo, o que fazer?"
  // neste caso armazenamos a resposta vinda da API para uma variável de nome resposne - poderia ser qualquer nome
  // abaixo foi escrita de forma básica sem usar o useEffect, funciona para teste mas gera um certo erro.

  //api.get('/').then((response) => {
  //console.log(response) // apenas para teste
  //  console.log(response.data) // captura APENAS os dados do json que queremos
  //  setUsers(response.data) // aqui atualizamos a variavel de estado para conter os dados - e exibimos onde quisermos
  //});

  // useEffect - uma função que só chamda quando nossa aplicaçao começa a rodar.
  // no nosso exemplo ele vai conter a chamada da api e evitar o erro de chamada constante da api.
  useEffect(() => {
    api.get('/').then((response) => {
      //console.log(response) // apenas para teste
      console.log(response.data) // captura APENAS os dados do json que queremos
      setUsers(response.data) // aqui atualizamos a variavel de estado para conter os dados - e exibimos onde quisermos
    });
  }, []);

  // cadstrando usário
  function adicionarUser(){
    api.post('/', { id, nome, idade, telefone }).then( (response) => {
      console.log(response) // apenas para teste
    } );
  }

  return (
    <div>
      <h1>Front-End Contatos</h1>

      <ul>
        {users.map(user => (
          <li key = {user.id}> 
            {user.id} - {user.nome} - {user.idade} - {user.telefone}</li>
        ))}
      </ul>
      <br></br>
      <button>Atualizar lista</button>

      <h2>Adicionando usuários</h2>
        <input placeholder="Id" onChange={event => setId(event.target.value)}/>
        <input placeholder="Nome" onChange={event => setNome(event.target.value)}/>
        <input placeholder="Idade" onChange={event => setIdade(event.target.value)}/>
        <input placeholder="Telefone" onChange={event => setTelefone(event.target.value)}/>
        <button onClick={adicionarUser}>Adicionar Usuário</button>

          
    </div>
  );
}
