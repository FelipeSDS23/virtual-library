import './App.css';
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import CadastrarLivro from './pages/CadastrarLivro';
import Login from './pages/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/cadastrar" element={<CadastrarLivro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
