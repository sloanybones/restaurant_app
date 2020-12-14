import Restaurant from './Restaurant'


const RestaurantList = (props) => {
  return(
<ul>
{props.restaurants.map((r) => 
<Restaurant
key={r.id}
{...r}
deleteRestaurant={props.deleteRestaurant}
/>

)}
</ul>
  )
  
}
export default RestaurantList;