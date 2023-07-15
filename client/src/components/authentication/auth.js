import {useState} from 'react'
import Login from './Login'
import Signup from './Signup'
const Auth=()=>{
    const [logIn, setLogin]=useState(true)
    const changeSetLogin=()=>{
        console.log("here");
        setLogin(false);
    }
    return <>
    {logIn && <Login LoginHandler={changeSetLogin}></Login>}    
    {!logIn && <Signup></Signup>}
    </>
}
export default Auth;