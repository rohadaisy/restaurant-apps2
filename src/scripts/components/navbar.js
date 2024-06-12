class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* CSS untuk navbar */
        .app-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #333;
          color: #fff;
          padding-left: 20px;
          padding-right: 20px;
          max-width: 1200px; /* Max width for the navbar */
          margin: 0 auto; /* Center the navbar */
          box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
          width: 100%; /* Ensure the navbar spans the full width of its container */
        }
        .app-bar__brand {
          font-size: 1.5rem;
          font-family: "Italiana", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        .app-bar__menu-button {
          min-width: 44px;
          min-height: 44px;
          display: inline-block;
          background: none;
          border: none;
          cursor: pointer;
        }
        .app-bar__menu-button .line {
          width: 30px;
          height: 3px;
          background-color: #fff;
          display: block;
          transition: transform 0.3s ease;
        }
        .app-bar__menu-button .line.middle {
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .app-bar__menu-button.open .line.top {
          transform: translateY(8px) rotate(45deg);
        }
        .app-bar__menu-button.open .line.middle {
          opacity: 0;
        }
        .app-bar__menu-button.open .line.bottom {
          transform: translateY(-8px) rotate(-45deg);
        }
        .app-bar__navigation {
          list-style: none;
          display: flex;
        }
        .app-bar__navigation li {
          margin-left: 1rem;
        }
        .app-bar__navigation a {
          color: #fff;
          text-decoration: none;
          padding: 12px 16px;
          min-width: 44px;
          min-height: 44px;
          display: inline-block;
        }
        @media (min-width: 769px) {
          .app-bar__menu-button {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .list-navigasi {
            display: flex;
            flex-direction: column;
          }
          .app-bar__menu-button {
            min-width: 44px;
            min-height: 44px;
            display: inline-block;
          }
          .app-bar__navigation {
            display: none;
            flex-direction: column;
            width: 100%;
            position: absolute;
            left: 0;
            z-index: 99;
            top: 90px;
            background-color: black;
            transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out;
            opacity: 0;
          }
          .app-bar__navigation.active {
            display: flex;
            opacity: 1;
          }
        }
      </style>
      <nav class="app-bar">
        <div class="app-bar__brand">
          <h2>Bon Appétit</h2>
        </div>
        <div class="list-navigasi">
          <div class="app-bar__menu">
            <button id="menu" class="app-bar__menu-button" aria-label="menu">
              <span class="line top"></span>
              <span class="line middle"></span>
              <span class="line bottom"></span>
            </button>
          </div>
          <ul class="app-bar__navigation">
            <li><a href="/">Home</a></li>
            <li><a href="#">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/rohadatul-aisy-3bb89a223/" target="_blank">About Us</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  connectedCallback() {
    const menuButton = this.shadowRoot.getElementById('menu');
    const navigation = this.shadowRoot.querySelector('.app-bar__navigation');

    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      navigation.classList.toggle('active');
      menuButton.classList.toggle('open');
    });
  }
}

customElements.define('nav-bar', NavBar);
