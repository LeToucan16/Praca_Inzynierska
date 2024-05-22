import React from "react";
import Navbar from '../../containers/navbar/Navbar';
import Nutrients from "../../containers/nutrients/Nutrients";
import SnapshotFirebaseAdvanced from "../../components/SnapshotFirebaseAdvanced";
import './products.css';

const Products = () => {
    return (
        <div className='gradient__bg'>
            <Navbar/>
            <Nutrients/>
            <div className="products_container">
            <SnapshotFirebaseAdvanced/>
            </div>
        </div>
    )
}

export default Products