/** @format */
import { useState } from "react";
import "./App.css";

function Card({item})
{
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => 
    {
        setShowModal(true)
    }

    const handleCloseModal = () => 
    {
        setShowModal(false)
    }

    return(
        <div className = "card">
            <img className="card-image" src = {item.src}/>

            <h3 className="card-title">{item.name}</h3>
            <ul className="card-info-list">
                <li>{item.description}</li>
                <li>{item.ingredients}</li>
            </ul>

            <button onClick={handleOpenModal}>View Calories</button>

            {showModal && (
            <div className="modal-overlay" onClick={handleCloseModal}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                <p>{item.calories} calories</p>
                <button onClick={handleCloseModal}>Close</button>
            </div>      
        </div>
            )}
        </div>
    );
};

export default Card;