import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
{/*import Searchpage from "./Searchpage"
import Business from './Business';
*/}
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {showLoginForm: true}
    

    }
    
    login = ()=>{
        this.setState({showLoginForm: false}) 
    }
    render(){
       
       let username = '';
        const location = this.props.location;
        if (location) {
            console.log(location);
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        }

        return (
            
            <div>
                <div>
                    {username.length > 0 ? 
                    <div>
                    <Link to='/'>Add Location</Link> { username}
                    </div>
                    :<Link to='/login'>Login to Continue</Link>}

                </div>
                
                {/*<div>
                    <Searchpage/>
                </div>*/}
            </div>
        )
    }
}
export default Home;