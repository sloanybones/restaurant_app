import {  Header } from "semantic-ui-react";


const Restaurant = ({ id, name }) => {
return(
  <Header as="h3">{name}</Header>
)
}

export default Restaurant;