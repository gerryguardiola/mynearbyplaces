import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {loggedIn: false}
    }
    
    loginCheck = () =>{
        this.setState({loggedIn: true}) 
    }

    render(){
       let username = '';
        const location = this.props.location;
        if (location && location.state && location.state.user) {
            username = location.state.user;        
        }

        return (
            <div>
                {this.state.loggedIn ? <div>
                <Link to='/add'>Add Location</Link> { username }
                </div>
                :<div><Link to='/login'>Login to Continue</Link></div>}
                {this.loginCheck}
            </div>
        )
    }
}
export default Home;