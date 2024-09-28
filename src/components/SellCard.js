import React from "react";

import '../styles/SellCard.css'
import { useNavigate } from 'react-router-dom';

function SellCard() {
    const navigate = useNavigate();

    const handleSellClick = () => {
        navigate('/Sell'); 
    };

    return (
        <div className="sc">
           <em> <h5 className="tex">We understand that parting with your furry friend is never an easy decision. We want to assure you that if you choose to sell your dog to us, they will receive the love and care they deserve.</h5></em><br/>
            <button onClick={handleSellClick} className="bt">Give Your Pet to Us</button>
        </div>
    );
}

export default SellCard;
