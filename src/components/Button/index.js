import "./styles.css";

export default class Button {
  constructor(text = "Button", id = "btn", version = "primary") {
    this.text = text;
    this.id = id;
    this.version = version;
  }
  render() {
    return `
      <div id="${this.id}" class="btn ${this.version}">
        ${this.text}
      </div>
    `;
  }
}
