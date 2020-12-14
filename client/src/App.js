import logo from './logo.svg';
import './App.css';
import RestaurantList from './RestaurantList.js';
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
  return (
    <>
      <h1>Restaurant app</h1>
     
      
      <RestaurantList
      restaurants={restaurants}
      />
   </>
   );
  }
export default App;
