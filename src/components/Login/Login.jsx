import React, { useContext } from 'react';
import "./Login.css"
import  * as firebase from "firebase/app"
import firebaseConfig from "./firebase.config"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userContex } from '../../App';
import { useHistory, useLocation } from 'react-router';



const Login = () => {
    const [loginUser, setLoginUser] = useContext(userContex)
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    firebase.initializeApp(firebaseConfig)
    // if(firebase.getApps.length === 0){
    //     
    // }
    const googleSigninHande=()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
               const {displayName, email} = result.user;
               const signedInUser = {name: displayName, email}
               setLoginUser(signedInUser)
                history.replace(from)
                
            }).catch((error) => {
                console.log(error.message)
            });
    }
    return (
        <div>
            <button className="login-button" onClick={googleSigninHande}>signIn with google</button>
        </div>
    );
};

export default Login;