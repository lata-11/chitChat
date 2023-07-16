import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./Login.module.css";
import Card from "../../UI/Card";

const Login = (props) => {
  const [istouched, setIsTouched] = useState(false);
  const [validUserId, isUserIdValid] = useState(false);
  const [validPassword, setValidPassword] = useState(true);
  const [userid, setUserId] = useState("");
  const [password, setPassowrd] = useState("");

  const changeUserIdhandler = (event) => {
    console.log(event.target.value);
    setUserId(event.target.value);
  };

  const useridInputBlueHandler = () => {
    setIsTouched(true);
    console.log("here");
    if (userid.length < 6) {
      console.log("here1");
      isUserIdValid(false);
      return;
    }
    isUserIdValid(true);
  };

  const changePasswordHandler = (event) => {
    setPassowrd(event.target.value);
  };

  const passwordCheckHandler = () => {
    if (password.trim() === "") {
      setValidPassword(false);
      return;
    }
    setValidPassword(true);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
  };

  const isValidClass = istouched && !validUserId;

  const firstNameClasses = isValidClass
    ? "form-control invalid"
    : "form-control";
  console.log(isValidClass);

  const passwordClass = validPassword ? "form-control" : "form-control invalid";

  return (
    <div className={classes.container}>
      <Card>
        <div className={classes["login-form"]}>
          <h1 className={classes["login-heading"]}>Login</h1>
          <form onSubmit={FormSubmitHandler}>
            <label>Enter Your User Id</label>
            <br></br>
            <input
              className={firstNameClasses}
              name="userid"
              onBlur={useridInputBlueHandler}
              onChange={changeUserIdhandler}
              type="text"
              id="userid"
            ></input>
            <br></br>
            <label>Enter Your Password</label>
            <br></br>
            <input
              name="password"
              className={passwordClass}
              onChange={changePasswordHandler}
              onBlur={passwordCheckHandler}
              type="password"
              id="password"
            ></input>
          </form>
          {isValidClass && (
            <p className="error-text">Please enter a Valid userid.</p>
          )}
          {!validPassword && <p>Enter Password</p>}
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
