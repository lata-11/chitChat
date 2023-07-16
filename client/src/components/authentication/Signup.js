import { Link } from "react-router-dom";
import Card from "../../UI/Card"
import classes from "./Signup.module.css";
import React, {useState} from "react";
const Signup = (props) => {

  const [isUserIdTouched, setUserIdTouched]=useState(false);
  const [isPasswordTouched, setPasswordTouched]=useState(false);
  const [isConfirmPasswordTouched,, setConfirmPasswordValid]=useState(false);
  const [isUserIdValid, setUsedIdValid]=useState(false);
  const [isPasswordValid, setPasswordValid]=useState(false);
  const [UserId, setUserId]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=('');

  const userIdTouchedHandler=()=>{
    setUsedIdValid(true);
  }

  const passwordTouchedHandler=()=>{
      setPasswordValid(true);
  }

  const confirmPasswordHandler=()=>{
    setConfirmPasswordValid(true);
  }

  const changeUserIdHandler=(event)=>{
    console.log(event.target.value);
    setUserId(event.target.value);
  }

  const changePasswordHandler=(event)=>{
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  const changeConfirmPasswordHandler=(event)=>{
    console.log(event.target.value);
    setConfirmPassword(event.target.value);
  }

  const formSubmitHandler=(event)=>{
    setUserIdTouched(true);
    setPasswordTouched(true);
    setConfirmPasswordValid(true);
    event.preventDefault(false);
  }

  return (
    <>
      <div className={classes.container}>
        <Card>
          <div className={classes["login-form"]}>
            <h1 className={classes["login-heading"]}>Signup</h1>
            <form onSubmit={formSubmitHandler}>
              <label>Enter Your UserId</label>
              <br></br>
              <input name="name" onBlur={userIdTouchedHandler} onChange={changeUserIdHandler} type="text" id="name"></input>
              <label>Enter Your Password</label>
              <br></br>
              <input name="password" onBlur={passwordTouchedHandler} onChange={changePasswordHandler} type="password" id="password"></input>
              <label>Confirm Your Password</label>
              <br></br>
              <input name="confirmpassword" onBlur={confirmPasswordHandler} onChange={changeConfirmPasswordHandler} type="password" id="confirmPasword"></input>
              <br></br>
              <button type='submit'>Signup</button>
            </form>
            
            <Link to="/login">Already Register? Click here to login</Link>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Signup;
