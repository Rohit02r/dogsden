import 'bootstrap/dist/css/bootstrap.min.css';

import Carousels from '../Carousel';
import Desc from '../Desc'
import SellCard from '../SellCard';
import Testimonials from '../Testimonials';

function Home() {
    return (
        <>
            
            <Carousels />
            <hr/>
            <h1>DOGS DEN</h1>
            <em><p className='p-3'>At Dogsden, we are dedicated to matching loving families with their perfect furry companions. Our team of passionate professionals prioritizes the health and well-being of every dog in our care, ensuring they are well-socialized and ready for a new home. We offer comprehensive adoption services, including support for training and integration into your family life. Choosing Dogsden means you’re not just adopting a dog; you're gaining a loyal friend and a lifelong partner in adventure!</p></em>
            <hr/>
            
            <Desc />
            <hr/>
            <SellCard />
            <hr/>
            <h3><em>Our Happy Customers</em></h3>
            <Testimonials/>
            <hr/>
        </>
    );
}

export default Home;
