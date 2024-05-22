import React from 'react'
import SignIn from '../../components/auth/SignIn'
import SignUp from '../../components/auth/SignUp'
import AuthDetails from '../../components/AuthDetails'
import Navbar from '../../containers/navbar/Navbar'

function Sign() {
  return (
    <div className='gradient__bg'>
      <Navbar/>
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </div>
  )
}

export default Sign
