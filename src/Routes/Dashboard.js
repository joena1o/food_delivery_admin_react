import DashNav from "../Components/DashNav";
import SideNav from "../Components/SideNav";
import ConfirmRoute from "./inner-routes/confirmed_route";
import DashRoute from "./inner-routes/dash-route";
import Delivered from "./inner-routes/delivered-route";
import MenuRoute from "./inner-routes/menu-routes";
import OrderRoute from "./inner-routes/Order-route";
import UserRoute from "./inner-routes/users-routes";
import {Switch, Route, Routes} from 'react-router-dom'
import ReviewRoute from "./inner-routes/review-route";
import SalesRoute from "./inner-routes/sales-route";
import DriverRoute from "./inner-routes/driver-route";
import CategoryRoute from "./inner-routes/category-route";

function DashBoard(){

    return(

        <div className="dashboard">

            <DashNav />

            <SideNav />
          

            <div className='layout-container'>

                <div className="layout-inner">

{/* 
                    <BrowserRouter>
                    
                    </BrowserRouter> */}
                    

                   
                   <Routes>

                   <Route exact path="/" element={<DashRoute />} />

                   <Route  path="order" element={<OrderRoute />} />

                   <Route  path="confirm" element={<ConfirmRoute />} />


                   <Route  path="delivery" element={<Delivered />} />


                   <Route  path="menu" element={<MenuRoute />} />

                   <Route  path="category" element={<CategoryRoute />} />

                   <Route  path="user" element={<UserRoute />} />


                   <Route  path="review" element={<ReviewRoute />} />


                   <Route  path="driver" element={<DriverRoute />} />

                   <Route  path="sales" element={<SalesRoute />} />


                   </Routes>


                    

                   
                   

                   {/* <OrderRoute />

                   <ConfirmRoute />

                   <Delivered />

                   <MenuRoute />

                   <UserRoute />

                   <ReviewRoute />

                   <DriverRoute />

                   <SalesRoute /> */}

                </div>

        

            </div>

        </div>

    )

}

export default DashBoard;