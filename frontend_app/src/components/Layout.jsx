import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
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