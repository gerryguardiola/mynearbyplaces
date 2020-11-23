import React from 'react';
import { Redirect } from "react-router-dom";
import BusinessFunctions from "./BusinessFunctions"

class AddLocation extends React.Component{
    constructor(props){
        super(props)
        this.state ={name: "", address: "",city: "",state:"", complete: false, reviews: []}

        if (props.updated === "true"){
            console.log(props.updated)
            this.state.updated = true
            var id = props.location.state.id

            this.state.id = BusinessFunctions.allbusinesses()[id].id
            this.state.name = BusinessFunctions.allbusinesses()[id].name
            this.state.address = BusinessFunctions.allbusinesses()[id].address
            this.state.city = BusinessFunctions.allbusinesses()[id].city
            this.state.state = BusinessFunctions.allbusinesses()[id].state
            this.state.open = BusinessFunctions.allbusinesses()[id].open
            this.state.reviews = BusinessFunctions.allbusinesses()[id].reviews
        }
    }

onSubmit = (event) => {
        this.setState({complete: true})
        var newBusiness = {id : this.state.id,name: this.state.name, open: this.state.open ,
             address: this.state.address,city: this.state.city,state : this.state.state, 
             reviews: this.state.reviews}
        if (this.state.updated){
            BusinessFunctions.updatebusiness(newBusiness)
        }
        else {
            BusinessFunctions.addbusiness(newBusiness)
        }
        event.preventDefault();
    }

onChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
}

render(){
    if (this.state.complete){
        return (
            <Redirect to="/yelp" /> 
        )
    }

    return (
        <div>
            {this.state.updated ? "update": "Add"}
            <form onSubmit={this.onSubmit}>  

                <input type="text" name="name" value={this.state.name} placeholder = "Location Name"
                 onChange={this.onChange}></input><br/>
            
                <input type="text" name="address" value={this.state.address} placeholder = "Address"
                 onChange={this.onChange}></input><br/>

                <input type="text" name="city" value={this.state.city} placeholder = "City"
                 onChange={this.onChange}></input><br/>

                <input type="text" name="state" value={this.state.state} placeholder = "State"
                 onChange={this.onChange}></input><br/>

                <button type="submit"><b>Save</b></button>
            </form>
    </div>
    )
    
}
}
export default AddLocation;