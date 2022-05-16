import SearchBar from "../../Components/SearchBar";
import axios from "axios";
import {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Delivered(){



    useEffect(()=>{

        fetch();

    });


    const [order, setOrder] = useState([]);

    const [deleteDia, setDel] = useState(false);

    const [Preview, setPrev] = useState([]);

    const deleteClose = () => setDel(false);
        
    const deleteShow = () => setDel(true);


    const Load = (value)=>{


    //    console.log(value);

       setPrev([value])

       console.log(Preview);

        

        deleteShow();


    }


    async function fetch(){

        await axios.get(`http://localhost:3001/getOrders/deliver`).then((value)=>{
              
            setOrder(value.data);
 
           })


    }


    async function Process(id,value){
         
        await axios.get(`http://localhost:3001/processorder/${id}/${value}`).then((value)=>{
              
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

                     
                     <div className="filter">

                     <div style={{padding:"20px"}}>
                   <b>Out for Delivery</b>

                        </div>

                        {/* <div style={{padding:"20px"}}>
                    
                    <button>Add new Item</button>

                        </div> */}





                     </div>

                 

               <hr />

                 


                <div className="chart-inner">


                <table>
                        <thead>
                            <td>Order ID</td>
                            <td>Ordered Items</td>
                            <td>Customer</td>
                            <td>Price (N) </td>
                            <td>Volume</td>
                            <td>Location</td>
                            <td>Time</td>
                            <td>Date</td>
                            <td>Action</td>
                        </thead>
                       
                       {

                            order.map((value)=>(


                                <tr>
                                <td>{value['order_id']}</td>
                                <td>{value['order_items']}</td>
                                <td>{value['customer']}</td>
                                <td>N{value['cost']}</td>
                                <td>{value['quantity']}</td>
                                <td>{value['location']}</td>
                                <td>{value['time']}</td>
                                <td>{(value['date'])}</td>
                                <td><button onClick={()=>Load(value)} style={{backgroundColor:"yellow",color:"black"}}>Preview</button></td>
                                
                            </tr>


                            ))


                       }
                       
                    </table>


            

                </div>

            </div>

            <br/> <br/>

                

            </div>



            <>
            <Modal show={deleteDia} onHide={deleteClose}>
              <Modal.Header closeButton>
              
              </Modal.Header>
              <Modal.Body>

                       
                       {

                                Preview.map((value)=>(

                                    <div>
                                        <div><b>Order Id:</b> {value['order_id']}</div><br/>
                                        <div><b>Items Ordered:</b> {value['order_items']}</div><br/>
                                        <div><b>Customer:</b> {value['customer']}</div><br/>
                                        <div><b>Email Addrees:</b> {value['user']}</div><br/>
                                        <div><b>Cost:</b> N{value['cost']}</div><br/>
                                        <div><b>Phone Number:</b> {value['phone']}</div><br/>
                                        <div><b>Quantity:</b> {value['quantity']}</div><br/>
                                        <div><b>Location:</b> {value['location']}</div><br/>
                                        <div><b>Address:</b> {value['address']}</div><br/>
                                        <div><b>Status:</b> {value['order_status']}</div><br/>
                                        <div><b>Time:</b> {value['date']}</div><br/>


                                    </div>

                                ))

                       }
                
                
               
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={deleteClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>



        </div>

    );


}

export default Delivered;