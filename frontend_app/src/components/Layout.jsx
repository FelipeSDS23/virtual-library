//Estilos
import styles from "./Layout.module.css";
//Componentes
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import SidebarMobile from "./SidebarMobile";
//Hooks
import useIsMobile from "../hooks/useIsMobile";

const Layout = ({ children }) => {

    const isMobile = useIsMobile();

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