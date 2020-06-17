import React,{Component} from 'react';

class Ayu extends Component
{
    render()
    {
        return(
            <div>
                <div className="container">
        <div className="facebook">
            <h1>facebook</h1>
        </div>
        <div className ="inputs">
            <div className="flex">
                <label className="label">Email or Phone</label>
                <input className ="input1" type="text" placeholder="Input"/>
            </div>
            <div className="peep">
                <label className="label">Password</label>
                <input className="input1" type="Password" placeholder="Password"/>
                <p className="label">Forgetten Password </p>
            </div>
            <button className="button">Log in</button>

        </div>

    </div>


            <div className="thik">
               
                <h1 className="bt">Create a new account</h1>
    
                <p className="para">it's quick and easy.</p>
                <div className="name" style={{marginTop:"10px", marginBottom:"10px"}}>
                    <input type="text" placeholder="First Name" style={{marginRight:"5px"}}/>
                    <input type="text" placeholder="SurName"/>
                </div>
               
                <input  className="papu" style={{marginTop:"10px", marginBottom:"10px"}}
                    type="text" placeholder="Mobile number or Email address"/>
                <input  className="papu" style={{marginTop:"10px", marginBottom:"10px"}}
                     type="text" placeholder="New Password"/>
                <label className="label3">Birthday</label>

                <div className="birth" style={{marginTop:"10px", marginBottom:"10px"}}>
                    <input type="date"/>
                </div>
                <label className="label3">Gender</label>

               <div className="Gender" style={{marginTop:"10px", marginBottom:"10px"}}>
                <input type="radio" />
                <label for="male">Male</label>
                <input type="radio" />
                <label for="female">Female</label>
                <input type="radio"/>
                <label for="custom ">Custom </label>
               </div>


               <label className="label2">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
            </label>
                <button className="but1">Sign In</button>
                
            </div>
            </div>
        
       
        );

    }
    
}
export default Ayu;
