import React from "react";
import BreedForm from "../BreedForm";
import '../../styles/Sell.css'



function Sell(){
    return(
        <>
        <h2 className="mt-4">A Loving Home Awaits Your Furry Friend</h2>
        <hr/>
        <h3>We will Take Care of Your Dog</h3>
       <em> <p className="p-4">At Dogsden, we are dedicated to matching loving families with their perfect furry companions. Our team of passionate professionals prioritizes the health and well-being of every dog in our care, ensuring they are well-socialized and ready for a new home. We offer comprehensive adoption services, including support for training and integration into your family life. Choosing Dogsden means you’re not just adopting a dog; you're gaining a loyal friend and a lifelong partner in adventure!</p></em>
       <hr/>
       <div className="breba">
       
        <BreedForm/>
        </div>
        </>
    )
}
export default Sell;
