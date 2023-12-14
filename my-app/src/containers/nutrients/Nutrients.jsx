import React from "react";
import './nutrients.css';

const Nutrients = () => {
    return (
        <div className="nutrients">
            <div className="nutrients-containers">
                <div className="kcal">
                    <p>Kcal: 2200</p>
                    <div className="kcal-level"></div>
                    <div className="aim">/3300</div>
                </div>
                <div className="carbs">
                <p>Węglowodany: 300</p>
                    <div className="carbs-level"></div>
                    <div className="aim">/380-600</div>
                </div>
                <div className="protein">
                <p>Białko: 130</p>
                    <div className="protein-level"></div>
                    <div className="aim">/100-170</div>
                </div>
                <div className="fat">
                <p>Tłuszcz: 60</p>
                    <div className="fat-level"></div>
                    <div className="aim">/90-115</div>
                </div>
            </div>
        </div>
    )
}

export default Nutrients 