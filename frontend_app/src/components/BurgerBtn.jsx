const BurgerBtn = () => {
    return (
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
    );
};

export default BurgerBtn;  