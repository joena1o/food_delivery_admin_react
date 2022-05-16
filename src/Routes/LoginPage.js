import LoginNav from "../Components/LoginNav";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import pie from '../Assets/pie-chart.png';


function LoginPage(){


    return(

        <div className="login_page">

        <LoginNav />

        <div className="login-inner">

            <div className="login-form">

                <center>
                <img width="15%" src={pie} />
                </center>

                <input type={"text"} placeholder={"Username"} />
                <input type={"password"} placeholder={"Password"} />
                <button><Link to="/dashboard" style={{textDecoration:"none",color:"white"}}>Login</Link></button>

            </div>


        </div>
            

        </div>
        

    );

}

export default LoginPage;