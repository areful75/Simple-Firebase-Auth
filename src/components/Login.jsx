import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase.init';

const Login = () => {

    const [user,setUser]=useState(null);
    const provider = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

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
        signOut(auth,provider)
        .then(()=>{
            console.log('User signed out successfully');
                setUser(null);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleSignInGithub = () => {
        console.log('GitHub Sign-In button clicked');
        signInWithPopup(auth, providerGithub)
        .then((result) => {
          const logInUser=result.user;
          if(!logInUser.email && logInUser?.providerData?.length ){
            console.log('No email found for this user');
            if(logInUser.providerData[0].email){
                logInUser.email=logInUser.providerData[0].email;
                setUser(logInUser);
            }
          }
          setUser(logInUser);
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
            :<>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            <button onClick={handleSignInGithub}>Sign In With Github</button></>
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