import React, { Component } from 'react';

class Fk extends Component {
    render() {
        return (
            <div style={{height:"100vh",width:"100%",backgroundColor:"red",backgroundImage: "url(" + "/w.jpg" + ")"}}>
                <div className="container"style={{height:"20%",width:"100%"}}>
                    <div className="Tempearture">
                        <h1 > Temperature</h1>
                    </div>
                </div>
                <div style={{paddingLeft:"5vh"}} >

                    <label className="label">Student ID</label><br/>
                    <input className="input1" type="Input" placeholder="Input" /><br/>
                    <label className="label">Name</label><br/>
                    <input className="input1" type="text" placeholder="Input" /><br/>
                    <label className="label">Temperature</label><br/>
                    <input className="input1" type="text" placeholder="Celcius" ></input><br/>
                    <input type ="checkbox" id="UnHealthy" /><label>Healthy</label><br/>
                    <input type ="checkbox" id="Unhealthy" /> <label> Unhealthy</label><br/>

                    <button className="but1" >SUBMIT</button>
              
                    
                </div>


            </div>





        );

    }

}
export default Fk;