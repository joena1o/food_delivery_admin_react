import {useNavigate} from 'react-router-dom';


function DashCards({catname, value, img, route}){

    const navigate = useNavigate();

    return(

        <div className="dash-card" onClick={()=>navigate(route)}>

            <div className="dash-card-inner">

                <div className="content">

                    <p>{catname}</p><br/>

                    <p>{value}</p>

                </div>

               
               <div className="img">

               <img src={img} />

               </div>

                 

              

            </div>

        </div>
    )



}

export default DashCards;