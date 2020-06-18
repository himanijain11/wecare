import React,{Component} from 'react';

class Ayu extends Component
{
    render()
    {
        return(
     <div>
          
          <div className="content">
              
                         <div className="title">
                                         <h5>Student's Details</h5>
                         </div>
                       
                         <form className="hh">


                                         <label for="student id">Student ID</label>
                                         <input type="text" name="student id" placeholder="Student id"></input><br></br>
                                         <br></br>
  
                                         <label for="name">Name</label> 
                                         <input type="text" name="name" placeholder="Name"></input><br></br>
                                         <br></br>

                                         <label for="surname">Surname</label> 
                                         <input type="text" name="surname" placeholder="Surname"></input><br></br>
                                         <br></br>
                                         
                                         <label for="class">Class</label> 
                                         <input type="text" name="class" placeholder="Class"></input><br></br>
                                         <br></br>

                                         <label for="section">Section</label> 
                                         <input type="text" name="section" placeholder="Section"></input><br></br>
                                         <br></br>
                                        
                                         <label for="gender">Gender</label> 
                                         <input type="text" name="gender" placeholder="Gender"></input><br></br>
                                         <br></br>
                                  </form>   

                          <form className="tt">
                                         <label for="birthday">DOB</label>
                                         <input type="text" name="birthday" placeholder="dd-mm-yy"></input><br></br>
                                         <br></br>

                                         <label for="address">Address</label> 
                                         <input type="text" name="address" placeholder="Address"></input><br></br>
                                         <br></br>  
                                           
                                         <label for="parents">Parents name</label> 
                                         <input type="text" name="parents" placeholder="Parents name"></input><br></br>
                                         <br></br>  
                                         
                                         <label for="contact">Contact No.</label>
                                         <input type="text" name="contact" placeholder="Contact no."></input><br></br>
                                         <br></br>  
                                         
                                         <label for="travel mode">Travel Mode</label> 
                                         <input type="text" name="travel mode" placeholder="Travel mode"></input><br></br>
                                         <br></br>
                                         
                                
                          </form>   
                        
                         <div >  
                                         <button className="button">Temperature checking</button>
                         </div>
          </div>
     </div>
     
                
                
        );      
    }
}
export default Ayu