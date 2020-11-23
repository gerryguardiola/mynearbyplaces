import React from 'react';
import {Link}  from "react-router-dom";
import BusinessFunctions from "./BusinessFunctions"

class Reviews extends React.Component{
    constructor(props){
        super(props)
        this.state = {ids: props.location.state.bs, reviewinp: null, reviewtext: "" }
    }

    reviewclick = (event) =>{
        this.setState({reviewinp: event.target.getAttribute("business")})
    }

    onSubmit = (event) => {
        BusinessFunctions.addreview(this.state.reviewinp,this.state.reviewtext)
        this.setState({reviewinp: null})
    }

    reviewchange = (event) => {
        const value = event.target.value;
        this.setState({reviewtext: value})
    }

    render(){
        var bs = this.state.ids.map(BusinessFunctions.findid)
        var divs =[]

        for (let i = 0; i < bs.length ; i++){
            const b = bs[i]
            let rdivs = []
            if (b.reviews.length === 0){
                rdivs.push(<div>There are no reviews yet. Be the first to review!</div>)
            }
            else{ 
                rdivs.push(<div><b>Reviews for this location</b></div>)
                rdivs= rdivs.concat(b.reviews.map((r) => <div> "{r}" </div>))
            }
            
            divs.push(<div>{b.name} located at {b.address}<br/>{rdivs}<button onClick={this.reviewclick}  business= {b.id}>Add a Review</button></div>)  
        }
        
        return (
            <div>
            {divs}
            {this.state.reviewinp ? <form onSubmit= {this.onSubmit}> <input onChange= {this.reviewchange} type = "text" placeholder = "post your review here!"/> 
            <button type ="submit"> Post Review</button> </form> : "" }
            <br/><Link to="/yelp">Return to Search</Link>
            </div>
        )
    }
}

export default Reviews;