import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Authentication/auth-context'
import Store, { StoreData } from '../storeOfData/Store'
import ExpenseItems from './Expense/ExpenseItems'
import ExpenseTable from './Expense/ExpenseTable'
import classes from './WelcomeScreen.module.css'

const WelcomeScreen = () => {
    const [showExp,setshowExp]=useState(false)

    const authCtx=useContext(AuthContext)
    const ctx=useContext(StoreData);

    const showExpenseHandler=()=>{
        setshowExp((prev)=>!prev);
    }

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
       
        <button className={classes.logout} onClick={()=>authCtx.logout()}>logout</button>
        <button type='submit' onClick={verifyEmailHandler} className={classes.verifyEmail}>Verify Email</button>
        </div>
        <div className={classes.line}></div>
        <div className={classes.addExp}>
        <button type="button" className="btn btn-secondary" onClick={showExpenseHandler}>{!showExp ? '+Add Expense' : 'Close'}</button>
        </div>
      {showExp &&  <div className={classes.form}>
        <ExpenseItems />
        </div>}
        <div className={classes.table}>
        <ExpenseTable />
        </div>
      
     
    </Fragment>
  )
}

export default WelcomeScreen