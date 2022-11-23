
import './App.css';
import Hotels from './component';

function Food(){
  const hotels = [
    {
      id : 1,
      name : 'Rajugaribiryani',
      location : 'Hyderabad'
      },
      {
        id : 2,
        name : 'nest',
        location : 'Benguluru'
      }
  ]
 

  return(
<Hotels hotel={hotels}/>
 
  )
    }

export default Food;
