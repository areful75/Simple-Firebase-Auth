import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase.init';

const Login = () => {

    const [user,setUser]=useState(null);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Google Sign-In button clicked');
        signInWithPopup(auth, provider)
        .then((result) => {
          //console.log(result.user);
          setUser(result.user);
        })
       .catch(error=>{
        console.log(error);
       })
       //console.log(user);
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{
            console.log('User signed out successfully');
                setUser(null);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
           <h2>Please LogIn</h2>
           {/* <button onClick={handleGoogleSignIn}>Sign In with Google</button>
           <button onClick={handleSignOut}>Sign Out</button> */}

           {
            user ?
            <button onClick={handleSignOut}>Sign Out</button>
            :<button onClick={handleGoogleSignIn}>Sign In with Google</button>
           }
           {
            user && <div>
                <h3>User Name: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
              
            </div>
           }
        </div>
    );
};

export default Login;