import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.teste}>
            <Header />
            <div className={styles.dflex}>
                <Sidebar />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;