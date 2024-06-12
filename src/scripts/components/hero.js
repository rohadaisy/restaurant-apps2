// hero.js

class HeroSection extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .hero {
            position: relative;
            text-align: center;
            color: white;
          }
          .hero__image {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
          .hero__content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        </style>
        <div class="hero">
          <img src="images/heros/hero-image_1.jpg" alt="Hero Image" class="hero__image" />
          <div class="hero__content">
            <h1>Bon Appétit</h1>
            <p>Discover the best restaurants around you</p>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('hero-section', HeroSection);
  