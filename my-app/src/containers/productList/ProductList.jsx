import React from 'react'
import { collection, onSnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../../firebase';
import { doc, query, getDoc, addDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import './productList.css'

const ProductList = () => {
  const [protein, setProtein] = useState('');

    //const auth = getAuth();

    //const userId = auth.currentUser.uid;

// product = {
//     carbs: "",
//     name: ""
// }

const addFood = async (userId, date, product) => {
    const q = await query(
      collection(db, 'productsPerDay'),
      where("userId", "==", userId),
      where("date", "==", date)
    );

    const docs = await getDoc(q);

    if (!docs) {
      const createdFood = await addDoc(
        collection(db, 'productsPerDay'),
        {
            userId,
            date,
            products: [product] 
        }
      );
      
      return;
    }
    
    const food = docs[0];
    
    const newProducts = [...food.products, product];
    
    const foodDoc = doc(db, 'productsPerDay', food.id);
    
    await setDoc(foodDoc, {
        ...food,
        products: newProducts
    })
}
    ;


   
    const [products, setProducts] = useState([]);
    const [list, setList] = useState(false);

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
    <div className='container_productList'>
      <div className='addedProducts'>
      <h1>Added Products</h1>
      </div>
      <div className='productList'>
        <div className='productList-list'>
            {list
                ? <button type='button' className='button2' onClick={()=> setList(false)}>Close List</button>
                : <button type='button' className='button2' onClick={()=> setList(true)}>Add Product</button>
            }
            {list && (
                <div className='productList-list_container'>
                    <h1>Choose product</h1>
                    <div className='productList-list_container-products'>
                    {products.map((products) => (
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
                    <div className='values'>
                    <h6>Amount in g</h6>
                    <input
                      type="number"
                      value={protein}
                      onChange={(e) => setProtein(e.target.value)}
                    />
                    </div>
                    <div>
                      <button type='button' className='button' onClick={() => addFood(products.id)}>Add</button>
                    </div>
                  </div>
                    ))}
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
