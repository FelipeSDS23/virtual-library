import React from "react";
import Sidebar from "./Sidebar";
import styles from "./SidebarMobile.module.css";

const SidebarMobile = () => {
  return (
    <>
      {/* Navbar com botão para abrir o menu */}
      {/* <div className={styles.mobileBurgerBtn}>
        <nav className="navbar navbar-dark">
            <div className="container-fluid">
            <button
                className="btn btn-outline-light"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebar"
            >
                ☰
            </button>
            </div>
        </nav>
      </div> */}
      

      {/* Sidebar Offcanvas */}
      <div className="offcanvas offcanvas-start bg-dark text-white" id="sidebar">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="">
            <Sidebar />
        </div>
      </div>
    </>
  );
};

export default SidebarMobile;