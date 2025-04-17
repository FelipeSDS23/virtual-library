const Login = () => {
    return (
        <section>
            <form action="">
                <div>
                    <label htmlFor="e-mail">e-mail</label>
                    <input type="text" id="e-mail" />
                </div>
                <div>
                    <label htmlFor="Senha">Senha</label>
                    <input type="text" id="Senha" />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </section>
    );
};

export default Login;
