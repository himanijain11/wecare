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
                    <div className="questions">
                    <div className="one">
                        <p>Are you experiencing any of the following symptoms ?</p>
                    
                        
                    <div className="buttoni">
                    <button >COUGH</button>
                    <button >FEVER</button>
                    <button >DIFFICULTY IN BREATHING</button>
                    <button >LOSS OF SENSES OF SMELL AND TASTE</button>
                    
                    <button >NONE OF THE ABOVE</button>
                    </div>

                    </div>
                    <div className="one">
                    <p>Have you ever had any of the following ?</p>
                    
                    <div className="buttoni">
                    <button >DIABETES</button>
                    <button >HYPERTENSION</button>
                    <button >LUNG DISEASE</button>
                    <button >HEART DISEASE</button>
                    <button >KIDNEY DISEASE</button>
                    <button >NONE OF THE ABOVE</button>

                    </div>
                    </div>
                    <div className="one">
                    <p>Have you travelled anywhere internationally in the last 28-45 days ?</p>
                    
                    <div className="buttoni">
                    <button >YES</button>
                    <button >NO</button>
                    </div>
                    </div>


                    <div className="one">
                    <p>Which of these following ?</p>
                    


                    <div className="buttoni">
                    <button >I have recently interacted or lived with someone who has tested positive for COVID-19</button>
                    <button >I am healthcare worker and i examine COVID-19 confirmed case without protective gear</button>
                    <button >NONE OF THE ABOVE</button>
                    
                    </div>

                    </div>




                    <div className="one">
                    <p>Your infection risk is low , we recommended that you stay at home to avoid any chances of expose to the novel COVID-19.</p>
                    <p>Retake the Self-Assessment Test if you develop symptoms or come in contact with a COVID-19 confirmed patient. </p>
                    
                    


                    <div className="buttoni">
                    <button >OK</button>
                    </div>
                    </div>
                    
                    </div>


                    </div>
        )
    }
}
export default Assess;