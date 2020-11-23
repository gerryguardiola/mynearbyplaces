var businesses = []

const BusinessFunctions = {
    findbusinesses:(input, city, state) => {
        if (input === ""){
            return []
        }
        if (businesses.filter(location => BusinessFunctions.contains(location.name, input) &&
         BusinessFunctions.contains(location.city,city) && BusinessFunctions.contains(location.state,state))){
            return businesses.filter(location => BusinessFunctions.contains(location.name, input) && 
            BusinessFunctions.contains(location.city,city) && BusinessFunctions.contains(location.state,state))
        }
        else{
            return []
        }
    },
    contains: (str,inc) =>{
        return (str.toLowerCase().includes(inc.toLowerCase()))
    },
    addbusiness:(business) => {
        business.open = true
        business.id = businesses.length
        businesses.push(business)
    },
    updatebusiness:(business) => {
        businesses[business.id] = business    
    },
    deleteLocation:(id) => {
        businesses[id].open = false
    }
    ,
    allbusinesses:() => {
       return businesses 
    },
    findid:(id) => {
        return businesses[id]
    },
    addreview:(id,review) => {
        businesses[id].reviews.push(review)
    }
}

export default BusinessFunctions;