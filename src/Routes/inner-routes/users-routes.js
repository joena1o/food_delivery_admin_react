import SearchBar from "../../Components/SearchBar";
import axios from "axios";
import {useState, useEffect} from "react";

function UserRoute(){


    const [users, setUser] = useState([]);


    useEffect(()=>{

        fetch();


    });

    const fetch = async()=>{

        axios.get("http://localhost:3001/getUsers").then((result)=>{

            setUser(result.data);

            console.log(users);

        });

            
    }


    return (
      
        <div className="order-route">

            <div className="order-route-innner">

                 <div className="order-chart">

                <div className="chart-inner">

                <SearchBar />

            

                </div>

            </div>

                

               

                 <div className="order-chart">

                     
                     <div className="filter">

                     <div style={{padding:"20px"}}>
                    Registered Users

                        </div>

                        {/* <div style={{padding:"20px"}}>
                    
                    <button>Add new Item</button>

                        </div> */}





                     </div>

                 

               <hr />

                 


                <div className="chart-inner">


                    <table>
                        <thead>
                            <td>ID No.</td>
                            <td>Customers Name</td>
                            <td>Gender</td>
                            <td>Address</td>
                            <td>Contact</td>
                            <td>Email Address</td>
                            <td>Location</td>
                            {/* <td>Lat</td>
                            <td>Long</td> */}
                            <td>Action 1</td>
                            <td>Action 2</td>
                        </thead>


                        {

                            users.map((value)=>(


                                <tr>
                                <td>1</td>
                                <td>{value['name'] + " " + value['lastname'] }</td>
                                <td>{value['gender']}</td>
                                <td>{value['address']}</td>
                                <td>{value['phone']}</td>
                                <td>{value['email']}</td>
                                <td>{value['location']}</td>
                                {/* <td>Lat</td>
                                <td>Long</td> */}
                                <td><button>Preview</button></td>
                                <td><button style={{backgroundColor:"red"}}>Delete</button></td>
                            </tr>


                            ))

                        }

                        
                       
                        
                    </table>

            

                </div>

            </div>

            <br/> <br/>

                

            </div>

        </div>

    );


}

export default UserRoute;