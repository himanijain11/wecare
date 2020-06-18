import React,{Container, Component} from 'react';
import './Assess.css';

class Assess extends Component{
    render(){
        return(
                <div className="container">
                    <div className="head">
                        <h1>SELF ASSESSMENT</h1>
                    </div>
                    <div className="place">
                    <p>Please note that information from this chat will be used for monitoring and management of the current health crisis and research in the fight against COVID-19.</p>
                    </div>
                    <div className="one">
                        <p>Are you experiencing any of the following symptoms ?</p>
                    </div>
                        
                    <div className="buttoni">
                    <button >COUGH</button>
                    <button >FEVER</button>
                    <button >DIFFICULTY IN BREATHING</button>
                    <button >LOSS OF SENSES OF SMELL AND TASTE</button>
                    <button >NONE OF THE ABOVE</button>

                    </div>
                    </div>
                        
        )
    }
}
export default Assess;
