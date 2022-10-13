import './Display.css'
import pic from "./malcrypt.jpg";

const Display = () => {

    return (
        <div className='display'>
            <div className='container'>
                
                {/* Left wing */}
                <div className='left-wing'>
                    <p>Invest in Cryptocurrency while you can!!</p>
                    <h1>Check the chart for live update</h1>
                    <div>
                        <button className='nav-btn'>Learn More</button>
                    </div>

                </div>

                {/* Right Wing */}
                <div className='right-wing'>
                    <div className='img-container'>
                     <img src={pic} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Display;