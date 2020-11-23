import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {loggedIn: false, username: ""}
    }
    
    loginCheck = () =>{
       this.setState({loggedIn: true})
    }

    render(){
    var userna = "";
    const location = this.props.location;
    
    if (this.state.username === ""){
        if (location && location.state && location.state.user) {
            userna = location.state.user;    
            this.setState({username:userna})
        }
    }
        return (
        <div>
            <div>
                {this.state.username !== "" || this.state.loggedIn === true? 
                <div>
                <Link to='/yelp'>Continue To MyNearbyPlaces</Link> { this.state.username }
                </div>
                :<div><Link to='/login' onClick ={() => this.loginCheck()}>Login to Continue</Link></div>}
            </div>
        </div>
        )
    }
}
export default Home;