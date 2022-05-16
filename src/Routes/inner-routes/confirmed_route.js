import SearchBar from "../../Components/SearchBar";
import axios from "axios";
import {useState, useEffect} from 'react';

function ConfirmRoute(){


    useEffect(()=>{

        fetch();

    });


    const [order, setOrder] = useState([]);


    async function fetch(){

        await axios.get(`http://localhost:3001/getOrders/confirm`).then((value)=>{
              
            setOrder(value.data);
 
           })


    }


    async function Process(id,value,user){
         
        await axios.get(`http://localhost:3001/processorder/${id}/${value}/${user}`).then((value)=>{
              
            alert(value);
 
           })

          
 
      }

    return(

        <div className="order-route">

            <div className="order-route-innner">

                 <div className="order-chart">

                <div className="chart-inner">

                <SearchBar />

            

                </div>

            </div>

                

               

                 <div className="order-chart">

                 <div style={{padding:"20px"}}>
                    <b>Confirmed Orders</b><br /><br /><hr />
                </div>

                 


                <div className="chart-inner">


                <table>
                        <thead>
                            <td>Order ID</td>
                            <td>Ordered Items</td>
                            <td>Customer</td>
                            <td>Price (N) </td>
                            <td>Volume</td>
                            <td> Time</td>
                            <td> Date</td>
                            <td>Action</td>
                            <td>Action 2</td>
                        </thead>
                       
                       {

                            order.map((value)=>(


                                <tr>
                                <td>{value['order_id']}</td>
                                <td>{value['order_items']}</td>
                                <td>{value['customer']}</td>
                                <td>N{value['cost']}</td>
                                <td>{value['quantity']}</td>
                                <td>{value['time']}</td>
                                <td>{value['date']}</td>
                                <td><button style={{backgroundColor:"yellow",color:"black"}}>Preview</button></td>
                                <td><button style={{backgroundColor:"red"}} onClick={()=>Process(value['order_id'], "Deliver", value['user'])}>Send for delivery</button></td>
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

export default ConfirmRoute;