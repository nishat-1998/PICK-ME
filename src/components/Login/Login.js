import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
const history= useHistory();
const location =useLocation();
const { from } = location.state || { from: { pathname: "/" } };

    !firebase.apps.length && firebase.initializeApp(firebaseConfig);
    const handleSignIn=() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName,email} = result.user;
    const signedInUser={name:displayName,email}
    setLoggedInUser(signedInUser);
    //console.log(signedInUser)
    history.replace(from);
    // ...
   
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode,errorMessage,email,credential)

    // ...
  });


    }
    const handelFacebookSign=()=>{
      var fbProvider = new firebase.auth.FacebookAuthProvider();
      firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        const {displayName,email} = result.user;
    const signedInUser={name:displayName,email}
    setLoggedInUser(signedInUser);
    history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
    console.log(errorCode,errorMessage,email);
      });
    }
  

    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleSignIn}>Sign In Using Google</button> <br/>
            <button onClick={handelFacebookSign}>Sign In Using Facebook</button> 
        </div>
    );
};

export default Login;