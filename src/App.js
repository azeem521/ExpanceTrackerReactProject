import logo from './logo.svg';
import './App.css';
import Authentication from './components/Authentication/Authentication';

import { Fragment, useContext } from 'react';
import AuthContext from './components/Authentication/auth-context';
import WelcomeScreen from './components/Pages/WelcomeScreen';
import { Route, Routes } from 'react-router-dom';
import CompleteProfile from './components/Pages/CompleteProfile/CompleteProfile';
import ForgotPassword from './components/Pages/forgotPassword/ForgotPassword';

function App() {

  const ctx =useContext(AuthContext)

  return (
    
    <Fragment>
      <Routes>
        <Route path='/' element= {!ctx.isLogin ? <Authentication /> : <WelcomeScreen />} />
        <Route path='/completeprofile' element={!ctx.isLogin ? <Authentication /> : <CompleteProfile />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />


      </Routes>
     
      </Fragment>
  );
}

export default App;
