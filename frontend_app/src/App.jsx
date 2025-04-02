import { useState } from 'react';
import './App.css';
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div>
        <h2>Bem-vindo ao Meu Site!</h2>
        <p>Este é um exemplo de layout em React com CSS puro.</p>
      </div>
    </Layout>
  );
}

export default App;
