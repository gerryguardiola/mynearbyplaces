import React from 'react';
import {  Link } from "react-router-dom";
import BusinessFunctions from "./BusinessFunctions"

  class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {input: "",businesses: [], display: false, city: "", state: ""}   
    }

    onSubmit = (event) => {
        this.setState({showbusiness: true}) 
        event.preventDefault();
    }

    delete = (event) => {
        BusinessFunctions.deleteLocation(event.target.getAttribute("business"))
        this.forceUpdate()
    }

    search = (event) => {
        const input = event.target.value;
        const businesses = BusinessFunctions.findbusinesses(input, this.state.city, this.state.state)
        this.setState({ businesses: businesses,input: input});
    }

    findCity = (event) => {
        const input = event.target.value;
        this.setState({ city: input,});
    }

    findState =  (event) => {
        const input = event.target.value;
        this.setState({ state: input,});
    }
  
    render(){
        var openBusinesses = this.state.businesses.filter(b => b.open)
        var locations = openBusinesses.map(b => b.id)
        var locationList= openBusinesses.map((b) => <div>
            {b.name}, {b.address}, {b.city}, {b.state} |
            <Link to={{pathname: "/update",state: { id: b.id }}}> Update</Link>
            | <a href="#" onClick={this.delete} business= {b.id}> delete </a>
            |<Link to={{ pathname: "/business",state: { locations: locations }}}> Reviews</Link> |
            </div>
        )

        var notFound = "";
        if (locationList.length === 0){
            notFound = "Results found";
        }
  
        return(
        <div>
            <form onSubmit={this.onSubmit}>
                <p>Please enter a City and State</p>
                <input type="text" value={this.state.findCity} placeholder = "Enter a City (i.e. Tucson)"
                 onChange={this.findCity}></input>

                <input type="text" value={this.state.findState} placeholder = "Enter a State (i.e. AZ)"
                 onChange={this.findState} ></input>
                <br/>

                <p>Enter a location to search for</p>
                <input type="text" value={this.state.input} placeholder = "Enter a business name here."
                 onChange={this.search}
                ></input>         
            </form>

                {locationList.length === 0 ? 
                "No businesses found yet" 
                :<div><b>{locationList.length} Results Found</b></div>}
                {locationList}
        </div>
        )
    }
}
export default Search;