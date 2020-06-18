import React, { Component } from 'react';
import './Login.css';

class Login extends Component{

    render(){

        return(
            
            <div className="container">
                <div className ="Login">
                    <h1>Login</h1> 
                </div>

    
        <div className="form__group field">
            <input type="input" class="form__field form_field1 " placeholder="Name" name="name" id='name' required />
            <input type="password" class="form__field" placeholder="Password" name="password" id='name' required />
          </div>
          <button className="but1">Login</button>

          <div class="kch">
            <a href="#" value='Sign Up'>Sign Up</a>
            <a class ="forgot" href="#" >Forgot Password ?</a>
          </div>

          


          </div>



      
        

        
            


        )
    }
}

export default Login;