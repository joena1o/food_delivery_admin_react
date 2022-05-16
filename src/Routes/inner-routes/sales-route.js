import SearchBar from "../../Components/SearchBar";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function SalesRoute(){

    
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 400, pv: 2400, amt: 2400},
{name: 'Page C', uv: 500, pv: 2400, amt: 2400},
{name: 'Page D', uv: 600, pv: 2400, amt: 2400},
{name: 'Page E', uv: 700, pv: 2400, amt: 2400}
];



    return(


        <div className="order-route">

            <div className="order-route-innner">

            <div className="order-chart">

                
                
                <div className="chart-inner">

                        <b>Sales</b>

                    </div>
                    </div>


            <div className="order-chart">

            <div className="chart-inner">

           
           

                <LineChart width={1100} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                </LineChart>


                <LineChart width={1100} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
  
  



           



            </div>

            </div>
            </div>

            <br/>

        </div>

    );



}

export default SalesRoute;