import {Link} from "react-router-dom";
import {FaDesktop, FaReceipt, FaChartLine} from 'react-icons/fa'
import {MdReceiptLong, MdOutlineDeliveryDining, MdMenuBook} from 'react-icons/md'
import {BiCategory} from "react-icons/bi"
import {FiUsers} from "react-icons/fi"
import {VscPreview} from 'react-icons/vsc'
import {RiCarFill} from 'react-icons/ri'
import {GoPackage} from 'react-icons/go'
import {AiOutlineBackward} from 'react-icons/ai'

function SideNav(){

    const style = {
        fontSize: "19px",
        color: "grey"
    }

    return (

        <div className="side-nav">

            <div className="side-inner">

                <div className="side-navs">

                    <ul>

                        <li><Link className="link" to="/dashboard"><FaDesktop style={style} />  Dashboard</Link></li>
                        <li><Link  className="link" to="order"><FaReceipt style={style} />  Pending Orders</Link></li>
                        <li><Link  className="link" to="confirm"><MdReceiptLong style={style} /> Confirmed Orders</Link></li>
                        <li><Link  className="link" to="delivery"><MdOutlineDeliveryDining style={style} />  Out for delivery</Link></li>
                        <li><Link  className="link" to="menu"><MdMenuBook style={style} />  Menu</Link></li>
                        <li><Link  className="link" to="category"><BiCategory style={style} />  Categories</Link></li>
                        <li><Link  className="link" to="user"><FiUsers style={style} />  Users</Link></li>
                        <li><Link  className="link" to="review"><VscPreview style={style} /> Review</Link></li>
                        <li><Link  className="link" to="driver"><RiCarFill style={style}/>  Drivers</Link></li>
                        <li><Link  className="link" to="delivery"><GoPackage style={style}/>  Delivered</Link></li>
                        <li><Link   className="link" to="sales"><FaChartLine style={style}/>  Sales</Link></li>

                        <li><AiOutlineBackward style={style}/>  Sign Out</li>

                    </ul>

                </div>

            </div>

        </div>

    );

    

}

export default SideNav;