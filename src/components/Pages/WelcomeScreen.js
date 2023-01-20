import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classes from './WelcomeScreen.module.css'

const WelcomeScreen = () => {
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
    </Fragment>
  )
}

export default WelcomeScreen