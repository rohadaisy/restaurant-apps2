import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../public/data/DATA.json';
import './components/restaurant-list.js';
import './components/navbar.js';
import './components/hero.js';
import './components/footer.js';

// Function to display restaurants
function displayRestaurants() {
  const restaurantContainer = document.getElementById('restaurants');
  data.restaurants.forEach((restaurant) => {
    const restaurantCard = document.createElement('restaurant-card');
    restaurantCard.restaurant = restaurant;
    restaurantContainer.appendChild(restaurantCard);
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  displayRestaurants();
});