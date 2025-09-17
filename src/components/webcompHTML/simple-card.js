// 1. Define the template and its styles
const template = document.createElement("template");
template.innerHTML = `
  <style>
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      font-family: sans-serif;
      background: #c8c3c4
    }

    ::slotted(h2) {
      color: #333;
      margin-top: 0;
    }
  </style>

  <div class="card">
    <slot name="title"></slot>
    <hr>
    <slot></slot>
  </div>
`;

// 2. Define the Custom Element class
class SimpleCard extends HTMLElement {
  constructor() {
    super();
    // Attach the Shadow DOM to the custom element
    this.attachShadow({ mode: "open" });
    // Clone the template content and append it to the Shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// 3. Define the new tag for the browser
customElements.define("simple-card", SimpleCard);
