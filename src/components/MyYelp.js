import React from 'react';
import { Link } from "react-router-dom";
import Search from "./Search"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {username: ""}
    }
    
    render(){
        return (
        <div>
            <div>
                <Link to='/add'>Add Location</Link>
            </div>
            <div>
            <Search/>
            </div>
        </div>
        )
    }
}
export default Home;