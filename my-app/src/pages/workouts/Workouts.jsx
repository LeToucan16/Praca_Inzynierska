import React from 'react'
import Navbar from '../../containers/navbar/Navbar'
import Nutrients from '../../containers/nutrients/Nutrients'
import Exercise from '../../containers/exerciseList/Exercise'
import ExerciseAdded from '../../containers/exerciseAdded/ExerciseAdded'
import './workouts.css';

const Workouts = () => {
  return (
    <div className='gradient__bg'>
      <Navbar/>
      <Nutrients/>
      <div className='workouts_container'>
        <div className='workouts_container-added'>
          <ExerciseAdded/>
        </div>
        <div className='workouts_container-addNew'>
          <Exercise/>
        </div>
      </div>
    </div>
  )
}

export default Workouts
