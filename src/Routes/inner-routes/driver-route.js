import SearchBar from "../../Components/SearchBar";
import car from "../../Assets/car.png";
import {useState} from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



function DriverRoute(){



    const [driver, setDriver] = useState("");
    const [phone, setPhone] = useState("");
    const [phone2, setPhone2] = useState("");
    const [gender, setGen] = useState("");
    const [address, setAdd] = useState("");

    const [file, setFile] = useState();

    const [filename, setFilename] = useState("");


        const saveFile = (e)=>{
              setFile(e.target.files[0]);
              setFilename(e.target.files[0].name);
        }


    const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

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
                    Drivers

                        </div>

                        <div style={{padding:"20px"}}>
                    
                    <button onClick={handleShow}>Add New Driver</button>

                        </div>





                     </div>

                     <hr />
            

             


            <div className="chart-inner">


                <table>
                    <thead>
                        <td>ID No.</td>
                        <td>Driver</td>
                        <td>Phone Number</td>
                        <td>Phone Number 2</td>
                        <td>Address</td>
                        <td>Gender</td>
                        <td>Image</td>
                        <td>Action</td>
                        <td>Action 2</td>
                    </thead>

                    <tr>

                    <td>1</td>
                        <td>Hyefur Jonathan</td>
                        <td>0802138758</td>
                        <td>0814956513</td>
                        <td>Kofare</td>
                        <td>Male</td>
                        <td><img  /></td>
                        <td><button style={{backgroundColor:"orange",color:"black"}}>Edit</button></td>
                            <td><button style={{backgroundColor:"red",color:"white"}}>Delete</button></td>

                    </tr>
                   
                </table>

        

            </div>

        </div>

        <br/> <br/>


        <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              <Modal.Title>New Driver</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> Drivers Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Drivers Name"
                      onChange={(e)=>setDriver(e.target.value)}
                      value={driver}
                      autoFocus
                    /><br></br>
                     <Form.Label>Phone 1</Form.Label>
                     <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      onChange={(e)=>setPhone(e.target.value)}
                      value={phone}
                      autoFocus
                    /><br></br>
                     <Form.Label>Phone 2</Form.Label>
                    <Form.Control
                      type="text"
                      value={phone2}
                      onChange={(e)=>setPhone2(e.target.value)}
                      placeholder="Phone Number"
                      autoFocus
                    />



                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Home Address</Form.Label>
                    <Form.Control value={address}  onChange={(e)=>setAdd(e.target.value)} as="textarea" rows={3} />

                    <br></br>
                    <Form.Select value={gender} onChange={(e)=>setGen(e.target.value)} aria-label="Default select example">
                        <option>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </Form.Select><br></br>
                        <br></br>

                     <input type="file" onChange={saveFile} />   

                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="success" onClick={handleClose}>
                 Add New Item
                </Button>
              </Modal.Footer>
            </Modal>
          </>

            

        </div>

    </div>

    );




}

export default DriverRoute;