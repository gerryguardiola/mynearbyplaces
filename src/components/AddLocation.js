import React from 'react';
import { Redirect } from "react-router-dom";
import BusinessFunctions from "./BusinessFunctions"

class AddLocation extends React.Component{
    constructor(props){
        super(props)
        this.state ={name: "", address: "",city: "",state:"", complete: false, reviews: []}
        if (props.update === true){
            this.state.update = true
            const id = props.location.state.id
            const b = BusinessFunctions.allbusinesses()[id]
            this.state.id = b.id
            this.state.name = b.name
            this.state.address = b.address
            this.state.city = b.city
            this.state.state = b.state
            this.state.open = b.open
            this.state.reviews = b.reviews
        }
    }

onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    }

onSubmit = (event) => {
        this.setState({complete: true})
        var newBusiness = {id : this.state.id,name: this.state.name, open: this.state.open ,
             address: this.state.address,city: this.state.city,state : this.state.state, 
             reviews: this.state.reviews}
        if (this.state.update){
            BusinessFunctions.updatebusiness(newBusiness)
        }
        else {
        BusinessFunctions.addbusiness(newBusiness)
        }
        event.preventDefault();
    }

render(){
    if (this.state.complete){
        return (
            <Redirect to="/yelp" /> 
        )
    }
    return (
        <div className="Add">
            {this.state.update ? "Update Business": "Add Business"}
            <form onSubmit={this.onSubmit}>  
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder = "Business Name"
                    onChange={this.onInputChange}
                ></input><br/>
            
            <input
                type="text"
                name="address"
                value={this.state.address}
                placeholder = "Address"
                onChange={this.onInputChange}
            ></input><br/>
            <input
                type="text"
                name="city"
                value={this.state.city}
                placeholder = "City"
                onChange={this.onInputChange}
            ></input><br/>
            <input
                type="text"
                name="state"
                value={this.state.state}
                placeholder = "State"
                onChange={this.onInputChange}
            ></input><br/>
            <button type="submit">Save Business</button>
    
        </form>
    </div>
    )
    
}
}
export default AddLocation;