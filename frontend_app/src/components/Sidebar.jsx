//Estilos
import styles from "./Sidebar.module.css";

import { Link } from 'react-router-dom';

const Sidebar = () => {

    const handleLinkClick = () => {
        const sidebar = document.getElementById('sidebar');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(sidebar);
        if (bsOffcanvas) {
            bsOffcanvas.hide();
        }
    };

    return (
        <nav className={styles.sidebarContainer}>
            <ul>
                <li>
                    <Link to="/cadastrar" onClick={handleLinkClick}>Cadastrar livro</Link>
                </li>
                <li>
                    <Link to="/login" onClick={handleLinkClick}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
