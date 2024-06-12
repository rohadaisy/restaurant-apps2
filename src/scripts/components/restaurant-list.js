// restaurantCard.js

class RestaurantCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set restaurant(data) {
    this._restaurant = data;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .restaurant-item {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%; /* Make sure each card has the same height */
        }

        .restaurant-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .restaurant-item h3 {
          margin: 1rem;
        }

        .restaurant-item p {
          margin: 0 1rem 1rem;
          flex-grow: 1; /* Allow the description to take up remaining space */
        }

        .badge-rating {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          font-size: 1rem;
        }

        .badge-rating .star {
          color: #ffd700;
          margin-right: 5px;
        }
      </style>
      <div class="restaurant-item">
        <img src="${this._restaurant.pictureId}" alt="${this._restaurant.name}" />
        <div class="badge-rating">
          <span class="star">★</span>${this._restaurant.rating}
        </div>
        <h3>${this._restaurant.name}</h3>
        <p>${this._restaurant.city}</p>
        <p>${this._restaurant.description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-card', RestaurantCard);
