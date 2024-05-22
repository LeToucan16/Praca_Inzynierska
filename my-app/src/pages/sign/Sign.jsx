import React from 'react'
import SignIn from '../../components/auth/SignIn'
import SignUp from '../../components/auth/SignUp'
import AuthDetails from '../../components/AuthDetails'
import Navbar from '../../containers/navbar/Navbar'
import './sign.css';

function Sign() {
  return (
    <div className='gradient__bg'>
      <Navbar/>
      <div className='sign_signBox'>
      <SignIn/>
      <SignUp/>
      </div>
      <AuthDetails/>
    </div>
  )
}

export default Sign
