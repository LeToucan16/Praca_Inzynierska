import React from 'react';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import Navbar from './containers/navbar/Navbar';
import Nutrients from './containers/nutrients/Nutrients';
import Food from './containers/food/Food';


const App = () => {

  return ( 
    <div className="App">
      <div className='gradient__bg'>
      <Navbar/>
      <Nutrients/>
      <Food/>
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
      </div>
    </div>
  )
}

export default App;
