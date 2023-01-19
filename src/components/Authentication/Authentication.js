import React, { Fragment, useRef, useState } from 'react'
import classes from './Authentication.module.css'

const Authentication = () => {
    const [isLogin,setIsLogin]=useState(true);
    // const emailInputRef=useRef('');
    // const passwordInputRef=useRef('');
    // const confpasswordInputRef=useRef('');
    const [isCursorAllow,SetisCursorAllow]=useState(true)
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [confPass,setconfPass]=useState('')




    const emailChangeHandler =(e)=>{
        setemail(e.target.value)
    }
const passwordChangeHandler =(e)=>{
    setpassword(e.target.value)
}

    const confPassChangeHandler =(e)=>{
        setconfPass(e.target.value)
        SetisCursorAllow(false)
    }

    const switchAuthModeHandler =()=>{
        setIsLogin((prev)=>!prev)
    }

    let url;

    const submitHandler =(e)=>{
        e.preventDefault()
       if(password!==confPass){
        return alert('Password is not same')
       }
       else{
        if(isLogin){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzlQHFRtkaZpExFfx1mBDR64QU8JL9mO4'
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzlQHFRtkaZpExFfx1mBDR64QU8JL9mO4'
        }

        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                console.log('Successfully signed up.');
            }else{
                const data=res.json();
                data.then((resp)=>{
                    alert(resp.error.message
                        );
                })
            }
        })

       }

    }

  return (
    <Fragment>
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email'  required onChange={emailChangeHandler} value={email} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password'  required onChange={passwordChangeHandler} value={password} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='confpassword'>Confirm Password</label>
                    <input type='confpassword' required onChange={confPassChangeHandler} value={confPass} />
                </div>
                <div className={classes.actions}>
                    <button type='submit' style={{'cursor':isCursorAllow ? 'not-allowed':'pointer'}} >{isLogin ? 'Login' : 'Create Account'}</button>
                    <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>{
                        isLogin ? 'Create new account' : 'Login with existing account'
                    }</button>
                </div>
            </form>
        </section>
    </Fragment>
  )
}

export default Authentication