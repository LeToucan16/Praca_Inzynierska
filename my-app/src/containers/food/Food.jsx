import React from "react";
import './food.css';
import { useState } from "react";

const App = () => { 
  const [product, setProduct] = useState({
    
  })  
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    setList([...list, { id: list.length + 1,
        Name: product.Name, Kcal: product.Kcal,Carbs: product.Carbs, Fat: product.Fat,
         isChecked: false }]);
    setProduct([]);
  };

  const deleteItem = (ids) => {
    const sortedList = list.filter((item) => item.id !== ids);
    setList(sortedList);
  };

  const checkItem = (ids) => {
    setList(
      list.map((item) =>
        item.id === ids ? { ...item, isChecked: true } : item
      )
    );
  };

  return (
    <div className="container">
      <h1 className="title">Produkty</h1>

      <div className="input-container">
        <input
          type="text"
          className="name-input"
          placeholder="Nazwa"
          onChange={(e) => setProduct(e.target.name)}
          Name={product.Name}
        />
        <input
          type="number"
          className="number-input"
          placeholder="Kcal"
          onChange={(e) => setProduct(e.target.Kcal)}
          Kcal={product.Kcal}
        />
        <input
          type="number"
          className="number-input"
          placeholder="Węglowodany"
          onChange={(e) => setProduct(e.target.Carbs)}
          Carbs={product.Carbs}
        />
        <input
          type="number"
          className="number-input"
          placeholder="Białko"
          onChange={(e) => setProduct(e.target.Protein)}
          Protein={product.Protein}
        />
        <input
          type="number"
          className="number-input"
          placeholder="Tłuscz"
          onChange={(e) => setProduct(e.target.Fat)}
          Fat={product.Fat}
        />

        <button className="add-button" onClick={() => addItem()}>
          Add
        </button>
      </div>

      <ul className="item-list">
        {list.map((item) => (
          <li className="item">
            <span
              style={{
                textDecoration: item.isChecked ? "line-through" : "none",
              }}
            >
              {item.Name}
              {item.Kcal}
              {item.Carbs}
              {item.Protein}
              {item.Fat}

            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => checkItem(item.id)}
              />
              <button
                className="delete-button"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;