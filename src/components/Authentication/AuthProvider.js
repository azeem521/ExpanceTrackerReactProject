

import React, { useState } from 'react'
import AuthContext from './auth-context';

const AuthProvider = (props) => {
    const [userIsLogin,setuserIsLogin]=useState(false)


    const loginHandler =()=>{
        setuserIsLogin(true);
    }

    const authValues={
        isLogin: userIsLogin ,
        login:loginHandler,
    }
  return (
    <AuthContext.Provider value={authValues}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider