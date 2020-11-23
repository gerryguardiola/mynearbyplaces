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

    search = (event) => {
        const input = event.target.value;
        const businesses = BusinessFunctions.findbusinesses(input, this.state.city, this.state.state)
        this.setState({ businesses: businesses,input: input});
    }

    citysearch = (event) => {
        const input = event.target.value;
        this.setState({ city: input,});
    }

    findState =  (event) => {
        const input = event.target.value;
        this.setState({ state: input,});
    }

    delete = (event) => {
        BusinessFunctions.deleteLocation(event.target.getAttribute("business"))
        this.forceUpdate()
    }
    
    render(){
        var buslist= this.state.businesses.filter(b => b.open)
        var bs = buslist.map(b => b.id)
        var locationList= buslist.map( (b) => <div>
            {b.name}, {b.address}, {b.city}, {b.state} |
            <Link to={{pathname: "/update",state: { id: b.id }}}> Update</Link>
            | <a href="#" onClick={this.delete} business= {b.id}> Delete </a>
            |<Link to={{ pathname: "/business",state: { bs: bs }}}> Reviews</Link> |
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
                    <input
                        type="text"
                        value={this.state.searchcity}
                        placeholder = "Enter a City (i.e. Tucson)"
                        onChange={this.citysearch}
                    ></input>
                    <div>
                    <input
                        type="text"
                        value={this.state.searchstate}
                        placeholder = "Enter a State (i.e. AZ)"
                        onChange={this.findState}
                    ></input>
                    <br/>
                    <p>Enter a location to search for</p>
                    <input
                        type="text"
                        value={this.state.input}
                        placeholder = "Enter a business name here."
                        onChange={this.search}
                    ></input>
                    <button type="submit">Find Businesses</button>
                    </div>

                </form>
                {locationList.length == 0 ? "No businesses found yet" 
                :<div>Total Results: {locationList.length}</div> }
                {locationList}
        </div>
        )
    }
}
export default Search;