import {useState} from 'react';

function SearchBar(props){

    const [sear, setSearch] = useState("");



    return(

    <div className="search-bar">

        <div className="search-bar-inner">

            <input type={"text"}  onChange={(e)=>setSearch(e.target.value)} placeholder="Search Here" />

            <button onClick={()=>props.callback(sear)}>Search</button>

        </div>

    </div>

    );


}

export default SearchBar;