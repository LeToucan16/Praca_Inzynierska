import React from 'react'
import { useState, useEffect } from 'react';
import './exercise.css';
import { collection, doc, onSnapshot, query , addDoc, deleteDoc} from 'firebase/firestore';
import { db } from '../../firebase';

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');

     //REALTIME GET FUNCTION
    useEffect(() => {
        const q = query(
          collection(db, 'exercises'),
          //  where('owner', '==', currentUserId),
          //where('name', '==', 'beef') // does not need index
          //  where('score', '<=', 100) // needs index  https://firebase.google.com/docs/firestore/query-data/indexing?authuser=1&hl=en
          // orderBy('score', 'asc'), // be aware of limitations: https://firebase.google.com/docs/firestore/query-data/order-limit-data#limitations
          // limit(1)
        );
    
        setLoading(true);
        // const unsub = onSnapshot(q, (querySnapshot) => {
        const unsub = onSnapshot(collection(db, 'exercises'), (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({...doc.data(), id: doc.id });
          });
          setExercises(items);
          setLoading(false);
        });
        return () => {
          unsub();
        };
    
        // eslint-disable-next-line
      }, []);

     // ADD FUNCTION
   async function addExercise(event) {
    //const owner = currentUser ? currentUser.uid : 'unknown';
    //const ownerEmail = currentUser ? currentUser.email : 'unknown';
    event.preventDefault()
    const newExercise = {name

      //id: uuidv4(),
      //owner,
      //ownerEmail,
      //createdAt: serverTimestamp(),
      //lastUpdate: serverTimestamp(),
    };

    try {
      //const schoolRef = doc(colletionRef, newProduct.id);
      await addDoc(collection(db, 'exercises'), newExercise);
    } catch (error) {
      console.error(error);
    }
    document.getElementsByClassName('input').value= '';
  }

    //DELETE FUNCTION
    async function deleteExercise(id) {
        try {
            const productDelete = doc(db, 'exercises', id)
          //const schoolRef = doc(colletionRef, products.id);
          await deleteDoc(productDelete);
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div className='exercise_container'>
        <div className='addExercise'>
         <h1>Add Exercise</h1>
       </div>
      <form action='.' onSubmit={addExercise}>
      <div className="exercise_inputBox">
        <div className='AddModule'>
        <h4>Name</h4>
        <input
          className = 'input'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <button className='button' type='submit'>Submit</button>
      </div>
      </form>
      {exercises.map((exercise) => (
        <div className="exercise_item" key={exercise.id}>
          <div className='values'>
          <h2>{exercise.name}</h2>
          </div>
          <div>
            <button className='button' onClick={() => deleteExercise(exercise.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Exercise
