import React, { Fragment, useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import AuthContext from '../Authentication/auth-context'
import Store, { StoreData } from '../storeOfData/Store'
import { authAction } from '../storeRedux/authReducer'
import ExpenseItems from './Expense/ExpenseItems'
import classes from './WelcomeScreen.module.css'

const WelcomeScreen = () => {
    // Redux
    const dispatch=useDispatch()

    // const authCtx=useContext(AuthContext)
    const ctx=useContext(StoreData);

    

    const url='https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAzlQHFRtkaZpExFfx1mBDR64QU8JL9mO4'

    const verifyEmailHandler=(e)=>{
        e.preventDefault();
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                requestType:"VERIFY_EMAIL",
                idToken:localStorage.getItem('idToken')
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            const data=res.json();
            data.then((resp)=>{
                console.log(resp);
            })
        }).catch((err)=>{
            console.log('err',err)
        })
    }



  return (
    <Fragment>
       
        <div className={classes.main}>
            <div className={classes.left}>
            Welcome to expance tracker!!!!
            </div>
            <div className={classes.right}>
                Your profile is incomplete.<Link to='/completeprofile'>Complete now</Link>
            </div>
        </div>
        <div className={classes.buttons}>
       
        <button className={classes.logout} onClick={()=>dispatch(authAction.logout())}>logout</button>
        <button type='submit' onClick={verifyEmailHandler} className={classes.verifyEmail}>Verify Email</button>
        </div>
        <div className={classes.line}></div>
        
      <div className={classes.form}>
        <ExpenseItems />
        </div>
        <div className={classes.table}>
        </div>
      
     
    </Fragment>
  )
}

export default WelcomeScreen