import SearchBar from "../../Components/SearchBar";
import {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from "axios";

function MenuRoute(){


  const [menu, setMen] = useState([]);

  

    useEffect(()=>{

        fetch();


     });


    async function fetch(){
         
       await axios.get("http://localhost:3001/fetchmenu/1").then((value)=>{
             
         setMen(value.data);

          })

     }


     function LoadDelete(id){


      setID(id);

      deleteShow();




     }
     

     async function deleteItem(){

      await axios.get(`http://localhost:3001/deleteItem/${id}`).then((value)=>{

        if(value.data == "deleted"){

          alert("Item has been deleted");

          deleteClose();

        }else{

          alert("Failed to delete");

        }

      });

     }

     async function search(val){

      console.log(val);

       await axios.get(`http://localhost:3001/searchmenu/${val}`).then((value)=>{

      console.log(value.data);

          setMen(value.data);

          

       })

     }


        const [show, setShow] = useState(false);

        const [EditS, setEdit] = useState(false);

        const [deleteDia, setDel] = useState(false);

        const handleClose = () => setShow(false);
        
        const handleShow = () => setShow(true);

        const EditClose = () => setEdit(false);
        
        const EditShow = () =>  setEdit(true);

        const deleteClose = () => setDel(false);
        
        const deleteShow = () => setDel(true);

        const [itemname, setName] = useState("");

        const [desc, setDes] = useState("");

        const [price, setPrice] = useState(1000);

        const [file, setFile] = useState();

        const [filename, setFilename] = useState("");

        const [cat, setCat] = useState("");

        const [id, setID] = useState("");

        const [stat, setStat] = useState("");


        const Edit = (value)=>{


            setName(value['item_name']);
            setID(value['item_id']);
            setDes(value['item_desc']);
            setPrice(value['item_price']);
            setCat(value['item_cat']);
            setStat(value['status']);

            EditShow();

     }

     const CloseEdit = ()=>{

            setName("");
            setDes("");
            setPrice(1000);
            setCat("");
            setStat("");

            EditClose();

     }


        const saveFile = (e)=>{
              setFile(e.target.files[0]);
              setFilename(e.target.files[0].name);
        }


        const post = async ()=>{

          handleClose();


          const formData = new FormData();
          formData.append("file", file);
          formData.append("filename", filename);
          formData.append("item", itemname);
          formData.append("desc", desc);
          formData.append("price", price);
          formData.append("cat", cat);

          try{

           await axios.post(
              "http://localhost:3001/newMenu", 
              formData
            ).then((value)=>{
  
              console.log(value.data);
  
  
            });
  


          }catch(e){
            console.log(e);
          }
          

         


        }

        const EditMenu = async ()=>{

          handleClose();


          const formData = new FormData();
          formData.append("file", file);
          formData.append("filename", filename);
          formData.append("item", itemname);
          formData.append("desc", desc);
          formData.append("price", price);
          formData.append("status", stat);
          formData.append("id", id);

          formData.append("cat", cat);

          try{

           await axios.post(
              "http://localhost:3001/EditMenu", 
              formData
            ).then((value)=>{
  
              console.log(value.data);
  
  
            });
  


          }catch(e){
            console.log(e);
          }
          

         


        }
    
      
     

    
    return(

        <div className="order-route">

            <div className="order-route-innner">

                 <div className="order-chart">

                <div className="chart-inner">

                <SearchBar callback={search} />

            

                </div>

            </div>

                

               

                 <div className="order-chart">

                     
                     <div className="filter">

                     <div style={{padding:"20px"}}>
                    Menu Orders

                        </div>

                        <div style={{padding:"20px"}}>
                    
                    <button  onClick={handleShow}>Add new Item</button>

                        </div>





                     </div>

                 

               <hr />

                 


                <div className="chart-inner">


                    <table>
                        <thead>
                            {/* <td>ID No.</td> */}
                            <td>Item Name</td>
                            <td>Price</td>
                            <td>Category</td>
                            <td>Description</td>
                            <td>Ingredents</td>
                            <td>Image</td>
                            <td>Status</td>
                            <td>Action 1</td>
                            <td>Action 2</td>
                        </thead>

                        {
                          menu.map((value)=>(
                            <tr>
                            {/* <td>{value['item_id']}.</td> */}
                            <td>{value['item_name']}</td>
                            <td>N{value['item_price']}</td>
                            <td>{value['item_cat']}</td>
                            <td>{value['item_desc']}</td>
                            <td>None</td>
                          <td><img width="70vw" src={`http://localhost:3001/fetchimg/${value['image']}`} /></td>
                            <td style={(value['status']=="Available")?{color:"green"}:{color:"red"}}>{value['status']}</td>
                            <td><button onClick={()=>Edit(value)} style={{backgroundColor:"orange",color:"white"}}>Edit</button></td>
                            <td><button onClick={()=>LoadDelete(value['item_id'])} style={{backgroundColor:"red",color:"white"}}>Delete</button></td>
                        </tr>
                          ))
                        }
                        
                    </table>

            

                </div>

            </div>

            <br/> <br/>

                

            </div>


            <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              
              </Modal.Header>
              <Modal.Body>
                {/* <Form > */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={itemname}
                      placeholder="Item Name"
                      autoFocus
                      onChange={(e)=>setName(e.target.value)}
                    /><br></br>
                     <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      min="100"
                      value={price}
                      placeholder="N Price"
                      onChange={(e)=>setPrice(e.target.value)}
                      autoFocus
                    />


                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Item Description</Form.Label>
                    <Form.Control value={desc} onChange={(e)=>setDes(e.target.value)} as="textarea" rows={3} />

                    <br></br>
                    <Form.Select value={cat} onChange={(e)=>setCat(e.target.value)} aria-label="Default select example">
                        <option>Menu Category</option>
                        <option value="snack">Snack</option>
                        <option value="dish">Dish</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                        <option value="fastfood">Fast food</option>
                        </Form.Select><br></br>
                        <br></br>

                     <input type="file" onChange={saveFile} />   

                  </Form.Group>
                {/* </Form> */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="success" onClick={post}>
                 Add New Item
                </Button>
              </Modal.Footer>
            </Modal>
          </>


          <>
            <Modal show={EditS} onHide={EditClose}>
              <Modal.Header closeButton>
              
              </Modal.Header>
              <Modal.Body>
                {/* <Form > */}
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={itemname}
                      placeholder="Item Name"
                      autoFocus
                      onChange={(e)=>setName(e.target.value)}
                    /><br></br>
                     <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      min="100"
                      value={price}
                      placeholder="N Price"
                      onChange={(e)=>setPrice(e.target.value)}
                      autoFocus
                    />


                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Item Description</Form.Label>
                    <Form.Control value={desc} onChange={(e)=>setDes(e.target.value)} as="textarea" rows={3} />

                    <br></br>
                    <Form.Select value={cat} onChange={(e)=>setCat(e.target.value)} aria-label="Default select example">
                        <option>Menu Category</option>
                        <option value="snack">Snack</option>
                        <option value="dish">Dish</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                        <option value="fastfood">Fast food</option>
                        </Form.Select><br></br>
                        <br></br>

                        <Form.Select value={stat} onChange={(e)=>setStat(e.target.value)} aria-label="Default select example">
                        <option value="available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                        </Form.Select><br></br>

                     <input type="file" onChange={saveFile} />   

                  </Form.Group>
                {/* </Form> */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={CloseEdit}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={EditMenu}>
                 Edit
                </Button>
              </Modal.Footer>
            </Modal>
          </>





          <>
            <Modal show={deleteDia} onHide={deleteClose}>
              <Modal.Header closeButton>
              
              </Modal.Header>
              <Modal.Body>

                Are you sure you want to delete this?
               
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={deleteClose}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={deleteItem}>
                Delete Item
                </Button>
              </Modal.Footer>
            </Modal>
          </>


            
            

        </div>

    );


}

export default MenuRoute;