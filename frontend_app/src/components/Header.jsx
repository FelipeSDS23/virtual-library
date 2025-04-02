import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import BurgerBtn from "./BurgerBtn";

const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        // Função para atualizar o estado quando a tela for redimensionada
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Adiciona o event listener
        window.addEventListener("resize", handleResize);

        // Remove o event listener ao desmontar o componente
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={styles.teste}>

            {isMobile && <BurgerBtn />}

            <h1>Meu Site</h1>

        </header>
    );
};

export default Header;