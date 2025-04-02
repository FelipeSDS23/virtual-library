import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={styles.teste}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
