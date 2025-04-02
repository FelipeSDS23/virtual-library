import React from "react";
//Estilos
import styles from "./SidebarMobile.module.css";
//Componentes
import Sidebar from "./Sidebar";

const SidebarMobile = () => {
  return (
    <div className="offcanvas offcanvas-start bg-dark text-white" id="sidebar">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Menu</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="">
        <Sidebar />
      </div>
    </div>
  );
};

export default SidebarMobile;