import logo from './logo.svg';
import './App.css';
import RestaurantList from './RestaurantList.js';
import RestaurantForm from './RestaurantForm.js';
import { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react";
import axios from "axios";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async() => {
    try {
    let res = await axios.get("/api/restaurants");
      setRestaurants(res.data);
    } catch (err) {
      console.log(err);
    } 
  };

  const addRestaurant = async (restaurant) => {
    try {
    let res = await axios.post("/api/restaurants", restaurant);
     setRestaurants([...restaurants, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRestaurant = 
  
  return (
    <>
    <Container>
      <h1>Restaurant app</h1>
     <RestaurantList
      restaurants={restaurants}
      />
      <h2>Add a Restaurant</h2>
      <RestaurantForm
     addRestaurant={addRestaurant} 
    />
    </Container>
   </>
   );
  }
export default App;
