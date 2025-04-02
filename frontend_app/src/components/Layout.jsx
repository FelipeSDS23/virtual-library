import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SidebarMobile from "./SidebarMobile";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {

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
        <div className={styles.teste}>
            <Header />
            <div className={styles.dflex}>
                <div className={styles.sidebar}>
                    {isMobile ? <SidebarMobile /> : <Sidebar />}
                </div>
                <main className={styles.mainContainer}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;