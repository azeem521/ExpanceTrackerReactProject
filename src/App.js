import logo from './logo.svg';
import './App.css';
import Authentication from './components/Authentication/Authentication';
import AuthProvider from './components/Authentication/AuthProvider';
import { useContext } from 'react';
import AuthContext from './components/Authentication/auth-context';
import WelcomeScreen from './components/Pages/WelcomeScreen';

function App() {

  const ctx =useContext(AuthContext)

  return (
    <AuthProvider>
    <div className="App">
      {ctx.isLogin ? <Authentication /> : <WelcomeScreen />}
    </div>
    </AuthProvider>
  );
}

export default App;
