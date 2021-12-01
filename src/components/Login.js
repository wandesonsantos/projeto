import  React from "react";
import { Switch, Route, Link } from "react-router-dom";
//import Header from'../../components/Herder';

import { AreaLogin } from './Heder/login';
import { BtnDefaultIcons, BtnDefaut } from './Heder/styled';

//import FacebookIcon from '@material-ui/icons/Facebook';
//import ArrowBackIosIcon  from "@material-ui/icons/ArrowBackIos";

/*export default ({onReceiveGoogle}) => {
    const actionLoginGoogle = async () => {
        let result= await Api.googleLogar();
        
        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
        }
    }
*/
function Login () {
    return (
            <Switch>
                <Route exact path="/registrar">
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"></Link>
                             Filmoteca
                        </h1>

                        <p>Criar conta</p>

                        <form>
                            <div className="form--imput">
                                <label>Nome</label>
                                <input type="text" />
                            </div>

                            <div className="form--imput">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>

                            <div className="form--imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefaut>Comece agora</BtnDefaut>
                            <div className="footerLogin">
                                Já tem uma conta?
                                <Link to="/login">Login</Link>
                            </div>

                        </form>
                    </AreaLogin>

                </Route>

                <Route exact path="/*">


                    <AreaLogin>
                        <h1> Filmoteca</h1>

                        <BtnDefaultIcons >
                            <div className="center">Fazer Login com o Google</div>
                        </BtnDefaultIcons>

                        <p>ou</p>

                        <form>
                            <div className="form--imput">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>

                            <div className="form--imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefaut>Entrar</BtnDefaut>
                            <div className="footerLogin">
                                Não tem uma conta?
                                <Link to="/registrar">Registre-se</Link>
                            </div>

                        </form>

                    </AreaLogin>
                </Route>
            </Switch>

    );

}
export default Login;