"use client";

import { useState } from "react";

import estilos from "./page.module.css";
import axios from "axios";

// Váriável onde está minha api
const api = axios.create({
  baseURL: 'http://localhost:8080'
});

export default function Home() {
  // criando um variável de estado que vai lsitar os usuários vindos da API
  const [users, setUsers] = useState([]) // meu use estate recebendo um array

  // acessando um endpoint do servidor com metodo get  
  api.get('/').then((response) => {
    //console.log(response) // apenas para teste
    console.log(response.data) // captura os dados
    setUsers(response.data)
  });


  return (
    <div>
      <h1>Front-End Contatos</h1>

      <ul>
        {users.map(user => (
          <li>{user.nome} - {user.idade}</li>
        ))}
      </ul>

    </div>
  );
}
