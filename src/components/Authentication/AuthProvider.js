

import React, { useState } from 'react'
import AuthContext from './auth-context';

const AuthProvider = (props) => {
    const initialLogin=localStorage.getItem('idToken');
    const [userIsLogin,setuserIsLogin]=useState(initialLogin)


    const loginHandler =()=>{
        setuserIsLogin(true);
    }
    const logoutHandler=()=>{
        localStorage.removeItem('idToken');
        setuserIsLogin(false);
    };

    const verificationHandler=()=>{

    }

    const authValues={
        isLogin: userIsLogin ,
        login:loginHandler,
        logout:logoutHandler,
        verification:verificationHandler
    }
  return (
    <AuthContext.Provider value={authValues}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider