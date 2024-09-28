import React from 'react';
import '../styles/WatsappArrow.css'; 
import Arr from '../assets/Icon/arr.svg'
import Wg from '../assets/Icon/wg.svg'

const WatsappArrow = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
           
        
            <img src={Arr} alt="Scroll to top" className='ica' onClick={scrollToTop}/> 

           

          
            <a 
                href="https://wa.me/9360790829" 
                className="whatsapp-icon" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                 <img src={Wg} alt="WhatsApp" className='icw'/>
            </a>
        </div>
    );
};

export default WatsappArrow;
