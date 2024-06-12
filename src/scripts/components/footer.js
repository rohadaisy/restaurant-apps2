// footer.js

class FooterSection extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 1rem 0;
          }
        </style>
        <footer>
          <p>Copyright © 2024 - Rohadaisy</p>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-section', FooterSection);
  