import { Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./Signup.module.css";
const Signup = (props) => {
  return (
    <>
      <div className={classes.container}>
        <Card>
          <div className={classes["login-form"]}>
            <h1 className={classes["login-heading"]}>Signup</h1>
            <form>
              <label>Enter Your Name</label>
              <br></br>
              <input name="name" type="text" id="name"></input>
              <br></br>
              <label>Enter Your Email ID</label>
              <br></br>
              <input name="email" type="email" id="email"></input>
              <br></br>
              <label>Enter Your Password</label>
              <br></br>
              <input name="password" type="password" id="password"></input>
              <label>Confirm Your Password</label>
              <br></br>
              <input name="password" type="password" id="confirmPasword"></input>
              <br></br>
            </form>
            <button>Login</button>
            <Link to="/login">Already Register? Click here to login</Link>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Signup;
