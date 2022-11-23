import './hoels.css'
function Hotels(props){
    const hoteldetails = props.hotel.map((hotel)=>{
        return(
    <div key = {hotel.id} className="hotel">
         <h1>{hotel.name}</h1>
         <h1>{hotel.location}</h1>
    </div>
        )
      })
    return(
        <div>
            <h1>{hoteldetails}</h1>
        </div>
    )
}
export default Hotels