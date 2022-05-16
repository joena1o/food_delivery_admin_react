import SearchBar from "../../Components/SearchBar";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from "axios";
import {useState, useEffect} from 'react';


function ReviewRoute(){


    const [review, reviews] = useState([]);

    const [reply, setReply] = useState("");

    const [reviewId, setReiewId] = useState("");
    
    const [reviewMod, SetMod] = useState(false);

    const handleClose = () => SetMod(false);
    
    const handleShow = () => SetMod(true);



    function LoadReply(id){

       

        setReiewId(id);

        // console.log(reviewId);

        handleShow();


    }

    const LoadDelete = (id)=>{
        setReiewId(id);


        Delete();

    } 



    useEffect(()=>{

        fetchReview();

    });



    const replyRev = ()=>{

        //console.log(reviewId);

       

     axios.post("http://localhost:3001/replyRev", {

        reply: reply,
        reply_id: reviewId

        }).then((value)=>{

            console.log(value.data);

        });


    }

   function fetchReview(){


        axios.get("http://localhost:3001/getReviews").then((result)=>{

            reviews(result.data);

           
        });


    }


    const Delete = ()=>{

    

        axios.get(`http://localhost:3001/deleterev/${reviewId}`).then((result)=>{

           alert(result.data);

           
        });


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
                    Reviews<br /><br /><hr />

                </div>

                 


                <div className="chart-inner">


                    <table>

                        <thead>
                            <td>ID No.</td>
                            <td>Customer</td>
                            <td>Review</td>
                            <td>Rating (5.0)</td>
                            <td>Time</td>
                            <td>Date</td>
                            <td>Action</td>
                            <td>Action 2</td>
                        </thead>


                        {

                                review.map((value)=>(


                        <tr>
                            <td>1</td>
                            <td>{value['user']}</td>
                            <td>{value['review']}</td>
                            <td>Rating ({value['rating']}.0)</td>
                            <td>{(value['date'])}</td>
                            <td>{(value['time_'])}</td>
                            <td><button onClick={()=>LoadReply(value['review_id'])} style={{backgroundColor:"orange",color:"black"}}>Reply</button></td>
                            <td><button onClick={()=>LoadDelete(value['review_id'])} style={{backgroundColor:"red",color:"white"}}>Delete</button></td>
                        </tr>


                                ))

                        }

                        
                       
                    </table>

            

                </div>

            </div>

            <br/> <br/>

                

            </div>



            <>
            <Modal show={reviewMod} onHide={handleClose}>
              <Modal.Header closeButton>
              
              </Modal.Header>
              <Modal.Body>
                {/* <Form > */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Reply**</Form.Label><br></br><br></br>
                    <Form.Control
                      type="text"
                      placeholder="Type Here..."
                      autoFocus
                      value={reply}
                      as="textarea" rows={3}
                      onChange={(e)=>setReply(e.target.value)}
                    /><br></br>
               

                  </Form.Group>
                 
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={()=>replyRev()} >
                 Reply
                </Button>
              </Modal.Footer>
            </Modal>
          </>


        </div>





    );




}

export default ReviewRoute;