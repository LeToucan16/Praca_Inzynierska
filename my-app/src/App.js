import React, { cloneElement } from 'react';

import {db} from './firebase';
import './App.css';
import Navbar from './containers/navbar/Navbar';
import Nutrients from './containers/nutrients/Nutrients';
import Food from './containers/food/Food';
import ProductList from './containers/productList/ProductList';
import Example from './components/dataPicker/DatePicker';


import { collection, onSnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const App = () => {




  const [products, setProducts] = useState([]);

  const productsCollection = collection(db, 'products');

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        }
      );
      setProducts(products);
    });

    return () => {
      unsub();
    };
  }, []);

  return ( 
    <div className="App">
      <div className='gradient__bg'>
      <Navbar/>
      <Nutrients/>
      <ProductList/>
      </div>
    </div>
    
  )
}

export default App;
