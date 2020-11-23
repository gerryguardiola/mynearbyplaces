var businesses = []

const BusinessFunctions = {
    findbusinesses:(input, city, state) => {
        if (input === null){
            return []
        }
        if (businesses.filter(location => BusinessFunctions.contains(location.name, input) &&
         BusinessFunctions.contains(location.city, city) && BusinessFunctions.contains(location.state, state))){

            return businesses.filter(location => BusinessFunctions.contains(location.name, input) && 
            BusinessFunctions.contains(location.city, city) && BusinessFunctions.contains(location.state, state))
        }
        else{
            return []
        }
    },
    contains: (expected, search) =>{
        return (expected.toLowerCase().includes(search.toLowerCase()))
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
    },
    addreview:(id, review) => {
        businesses[id].reviews.push(review)
    },
    allbusinesses:() => {
       return businesses 
    },
    findid:(id) => {
        return businesses[id]
    }
}

export default BusinessFunctions;