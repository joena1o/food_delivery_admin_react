import DashCards from "../../Components/DashCards";
import order from "../../Assets/order.png";
import menu from "../../Assets/menu.png"
import list from "../../Assets/list.png"
import star from "../../Assets/star.png"
import car from "../../Assets/car.png"
import box from "../../Assets/box.png"
import users from "../../Assets/users.png";
import sales from "../../Assets/sales.png"
import tracking from "../../Assets/tracking.png"
import megaphone from "../../Assets/megaphone.png"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';




function DashRoute(){

    


    const data = [
{name: 'Week 1', uv: 400, pv: 2400, amt: 2400},
{name: 'Week 2', uv: 500, pv: 2400, amt: 2400},
{name: 'Week 3', uv: 600, pv: 2400, amt: 2400},
{name: 'Week 4', uv: 700, pv: 2400, amt: 2400},
{name: 'Week 3', uv: 600, pv: 2400, amt: 2400},
{name: 'Week 4', uv: 700, pv: 2400, amt: 2400}
];

const nav = ()=>{

    console.log("Hellow")

}

    return(

        <div className="dash-route">

        
            <div style={{padding:"5px 20px",fontSize:"22px"}}>
                    Admin Panel<br /><br /><hr />
                </div>
           


            <div className="dash-grid">

            {/* <div onClick={()=>navigate("order")}> */}
            <DashCards catname={"Pending Orders"} route="order" value={10} img={order} />
            {/* </div> */}

            {/* <div onClick={()=>navigate("confirm")}> */}
            <DashCards catname={"Confirmed Orders"} route="confirm" value={10} img={order} />
            {/* </div> */}

            {/* <div onClick={()=>navigate("delivery")}> */}
            <DashCards catname={"Out for delivery"} route="delivery" value={10} img={tracking} />
            {/* </div> */}

            {/* <div onClick={()=>navigate("delivery")}> */}
            <DashCards catname={"Delivered"} route="delivery" value={10} img={box} />
            {/* </div> */}


            {/* <div onClick={()=>navigate("menu")}> */}
            <DashCards  catname={"Menu"} route="menu" value={10} img={menu}  />
            {/* </div> */}

            {/* <div onClick={()=>navigate("category")}> */}
            <DashCards catname={"Categories"} route="category" value={10} img={list} />
            {/* </div> */}

            {/* <div onClick={()=>navigate("user")}> */}
            <DashCards catname={"Users"} route="user" value={10} img={users} />
           

            
            <DashCards catname={"Review"} route="review" value={10} img={star} />
           

          
            <DashCards catname={"Drivers"} route="driver" value={10} img={car} />
           


           
            <DashCards catname={"Sales"} route="sales" value={10} img={sales} />
           


            
            <DashCards catname={"Broadcast Announcement"} value={10} img={megaphone} />
            



           

{/* <Link className="link2" to='order'><DashCards catname={"Pending Orders"} value={10} img={order} /></Link>

<Link className="link2" to='confirm'><DashCards catname={"Confirmed Orders"} value={10} img={order} /></Link>

<Link className="link2" to='delivery'><DashCards catname={"Out for delivery"} value={10} img={tracking} /></Link>

<Link className="link2" to='delivery'><DashCards catname={"Delivered"} value={10} img={box} /></Link>


<Link className="link2" to='menu'><DashCards catname={"Menu"} value={10} img={menu}  /></Link>

<Link className="link2" to='category'><DashCards catname={"Categories"} value={10} img={list} /></Link>

<Link className="link2" to='user'><DashCards catname={"Users"} value={10} img={users} /></Link>

<Link className="link2" to='review'><DashCards catname={"Review"} value={10} img={star} /></Link>

<Link className="link2" to='driver'><DashCards catname={"Drivers"} value={10} img={car} /></Link>


<Link className="link2" to='sales'><DashCards catname={"Sales"} value={10} img={sales} /></Link>

<Link className="link2" to='order'><DashCards catname={"Broadcast Announcement"} value={10} img={megaphone} /></Link> */}







            </div>


            <br/> <br/>

            <div style={{padding:"20px"}}>
                    Todays Orders<br /><br /><hr />
                </div>
            
            <div className="order-chart">
                
                <div className="chart-inner">


                <LineChart width={1100} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                </LineChart>


            

                </div>

            </div>



             <br/>

             <div style={{padding:"20px"}}>
                    Sales Stats<br /><br /><hr />
                </div>
            
            <div className="order-chart">

                 


                <div className="chart-inner">



                <LineChart width={1100} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                </LineChart>

            

                </div>

            </div>

            <br/> <br/>
          

        </div>


    );


}

export default DashRoute;