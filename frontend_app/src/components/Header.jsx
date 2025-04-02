//Estilos
import styles from "./Header.module.css";
//Componentes
import BurgerBtn from "./BurgerBtn";
//Hooks
import useIsMobile from "../hooks/useIsMobile";

const Header = () => {

    const isMobile = useIsMobile();

    return (
        <header className={styles.teste}>
            {isMobile && <BurgerBtn />}
            <h1>Meu Site</h1>
        </header>
    );
};

export default Header;