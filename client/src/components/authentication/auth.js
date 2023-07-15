import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Card from "../UI/Card";
import classes from './Auth.module.css';
const Auth = () => {
  const [logIn, setLogin] = useState(true);
  const changeSetLogin = () => {
    console.log("here");
    setLogin(false);
  };
  const changeSetSignup = () => {
    setLogin(true);
  };
  return (
    <>
      <div className={classes.auth}>
        <Card>
          {logIn && <Login LoginHandler={changeSetLogin}></Login>}
          {!logIn && <Signup SignupHandler={changeSetSignup}></Signup>}
        </Card>
      </div>
    </>
  );
};
export default Auth;
