import React from 'react'
import Navbar from '../../containers/navbar/Navbar'
import Nutrients from '../../containers/nutrients/Nutrients'
import Exercise from '../../containers/exerciseList/Exercise'

const Workouts = () => {
  return (
    <div className='gradient__bg'>
      <Navbar/>
      <Nutrients/>
      <Exercise/>
    </div>
  )
}

export default Workouts
