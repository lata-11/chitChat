import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import Card from "../UI/Card";

const Login = (props) => {
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes["login-form"]}>
          <h1 className={classes["login-heading"]}>Login</h1>
          <form>
            <label>Enter Your Email ID</label>
            <br></br>
            <input name="email" type="email" id="email"></input>
            <br></br>
            <label>Enter Your Password</label>
            <br></br>
            <input name="password" type="password" id="password"></input>
          </form>
          <button>Login</button>
          <Link to="/signup">
            Don't have an account? Click here to register.
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
