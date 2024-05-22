import React, { useState, useEffect, Fragment, useContext } from 'react';
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  addDoc
} from 'firebase/firestore';
import {db} from '../firebase';
import './snapshotFirebaseAdvanced.css'
//import { v4 as uuidv4 } from 'uuid';


function SnapshotFirebaseAdvanced() {
  const colletionRef = collection(db, 'products');

  //const { currentUser } = useContext(AuthContext);

  //const currentUserId = currentUser ? currentUser.uid : null;
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [kcal, setKcal] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [id, setId] = useState('');

  //ONE TIME GET FUNCTION
  // useEffect(() => {
  //   const getSchools = async () => {
  //     setLoading(true);

  //     const querySnapshot = await getDocs(dbRef);
  //     const items = [];

  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setSchools(items);
  //     setLoading(false);
  //   };

  //   try {
  //     getSchools();
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   // eslint-disable-next-line
  // }, []);

  //REALTIME GET FUNCTION
  useEffect(() => {
    const q = query(
      colletionRef,
      //  where('owner', '==', currentUserId),
      //where('name', '==', 'beef') // does not need index
      //  where('score', '<=', 100) // needs index  https://firebase.google.com/docs/firestore/query-data/indexing?authuser=1&hl=en
      // orderBy('score', 'asc'), // be aware of limitations: https://firebase.google.com/docs/firestore/query-data/order-limit-data#limitations
      // limit(1)
    );

    setLoading(true);
    // const unsub = onSnapshot(q, (querySnapshot) => {
    const unsub = onSnapshot(colletionRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id });
      });
      setSchools(items);
      setLoading(false);
    });
    return () => {
      unsub();
    };

    // eslint-disable-next-line
  }, []);

  // ADD FUNCTION
   async function addProduct(event) {
    //const owner = currentUser ? currentUser.uid : 'unknown';
    //const ownerEmail = currentUser ? currentUser.email : 'unknown';
    event.preventDefault()
    const newProduct = {name, kcal, carbs, protein, fat,

      //id: uuidv4(),
      //owner,
      //ownerEmail,
      //createdAt: serverTimestamp(),
      //lastUpdate: serverTimestamp(),
    };

    try {
      //const schoolRef = doc(colletionRef, newProduct.id);
      await addDoc(colletionRef, newProduct);
    } catch (error) {
      console.error(error);
    }
    document.getElementsByClassName('input').value= '';
  }

  //DELETE FUNCTION
  async function deleteProduct(id) {
    try {
        const productDelete = doc(db, 'products', id)
      //const schoolRef = doc(colletionRef, products.id);
      await deleteDoc(productDelete);
    } catch (error) {
      console.error(error);
    }
  }

  // EDIT FUNCTION
  async function editProduct(products) {
    const updatedProduct = {
      name, kcal, carbs, protein, fat, id,
      //lastUpdate: serverTimestamp(),
    };

    try {
      const schoolRef = doc(colletionRef, products.id);
      updateDoc(schoolRef, updatedProduct);
    } catch (error) {
      console.error(error);
    }
  }


  console.log(schools)
  return (
    <Fragment>
    <div className='container'>
      <div className='addProduct'>
         <h1>Add Product</h1>
       </div>
      <form action='.' onSubmit={addProduct}>
      <div className="inputBox">
        <div className='AddModule'>
        <h4>Name</h4>
        <input
          className = 'input'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>

        <div className='AddModule'>
        <h4>Kcal</h4>
        <input
          className = 'input'        
          type="number"
          value={kcal}
          onChange={(e) => setKcal(e.target.value)}
        />
        </div>
        
        <div className='AddModule'>
        <h4>Carbs</h4>
        <input
          className = 'input'
          type="number"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}
        />
        </div>
        
        <div className='AddModule'>
         <h4>Protein</h4>
        <input
          className = 'input'
          type="number"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        </div>

        <div className='AddModule'>
         <h4>Fat</h4>
        <input
          className = 'input'
          type="number"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />
        </div>

        <button className='button' type='submit'>Submit</button>
      </div>
      </form>
      {loading ? <h1>Loading...</h1> : null}
      <h1>Available Products</h1>
      {schools.map((products) => (
        <div className="product" key={products.id}>
          <div className='values'>
          <h2>{products.name}</h2>
          </div>
          <div className='values'>
          <h6>Kcal</h6>
          <p>{products.kcal}</p>
          </div>
          <div className='values'>
          <h6>Carbs</h6>
          <p>{products.carbs}</p>
          </div>
          <div className='values'>
          <h6>Protein</h6>
          <p>{products.protein}</p>
          </div>
          <div className='values'>
          <h6>Fat</h6>
          <p>{products.fat}</p>
          </div>
          <div>
            <button className='button' onClick={() => deleteProduct(products.id)}>X</button>
          </div>
        </div>
      ))}
      </div>
    </Fragment>
  );
}

export default SnapshotFirebaseAdvanced;