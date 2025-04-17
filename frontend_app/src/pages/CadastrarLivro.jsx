import styles from "./CadastrarLivro.module.css";
import { useState } from "react";
import axios from "axios";

const CadastrarLivro = () => {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        year: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/books", formData);
            console.log("Livro cadastrado com sucesso:", response.data);
            alert("Livro cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar livro:", error);
            alert("Erro ao cadastrar livro.");
        }
    };

    return (
        <section className={styles.cadastrarLivroContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="author">Autor:</label>
                    <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="category">Categoria:</label>
                    <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />
                </div>

                <div>
                    <label htmlFor="year">Ano:</label>
                    <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} required />
                </div>

                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </section>
    );
};

export default CadastrarLivro;
