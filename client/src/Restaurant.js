import {  Header, Button, Icon } from "semantic-ui-react";


const Restaurant = ({ id, name, deleteRestaurant }) => {
return(
  <>
  <Header as="h3">{name}</Header>
  <Button icon="trash" onClick={()=>deleteRestaurant(id)}></Button>
  <Button icon="pencil" ></Button>
      </>
)
}

export default Restaurant;