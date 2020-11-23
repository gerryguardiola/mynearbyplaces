import React from 'react';
import {Link}  from "react-router-dom";
import BusinessFunctions from "./BusinessFunctions"

class Reviews extends React.Component{
    constructor(props){
        super(props)
        this.state = {ids: props.location.state.locations, input: null, inputTXT: "" }
    }

    onSubmit = (event) => {
        BusinessFunctions.addreview(this.state.input,this.state.inputTXT)
        this.setState({input: null})
    }

    updateReview = (event) => {
        this.setState({inputTXT: event.target.value})
    }

    addReview = (event) =>{
        this.setState({input: event.target.getAttribute("business")})
    }

    render(){
        var locations = this.state.ids.map(BusinessFunctions.findid)
        var reviewHolder =[]

        for (let i = 0; i < locations.length ; i++){
            const b = locations[i]
            let reviews = []

            if (b.reviews.length === 0){
                reviews.push(<div><i>There are no reviews yet. Be the first to review!</i></div>)
            }

            else{ 
                reviews.push(<div><b>Reviews for this location</b></div>)
                reviews= reviews.concat(b.reviews.map((r) => <div> "{r}" </div>))
            }
            
            reviewHolder.push(<div><b>{b.name}</b> located at <b>{b.address}</b><br/><br/>{reviews}
            <button onClick={this.addReview} business= {b.id}>Add a Review</button></div>)  
        }
        
        return (
            <div>
                {reviewHolder}
                {this.state.input ? <form onSubmit= {this.onSubmit}> <input onChange= {this.updateReview}
                 type = "text" placeholder = "post your review here!"/> 
                <button type ="submit"> Post Your Review</button> </form> : "" }
                <br/><Link to="/yelp">Return to Search</Link>
            </div>
        )
    }
}

export default Reviews;