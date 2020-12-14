import {  Header, Button, Icon } from "semantic-ui-react";


const Restaurant = ({ id, name }) => {
return(
  <>
  <Header as="h3">{name}</Header>
  <Button icon="trash" ></Button>
  <Button icon="pencil" ></Button>
      </>
)
}

export default Restaurant;