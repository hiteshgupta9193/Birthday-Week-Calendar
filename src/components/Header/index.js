import "./styles.css";

export default class Header {
  constructor(title) {
    this.title = title;
  }
  render() {
    return `
      <div class="header-container">
        <h1>${this.title}<h1>
      </div>
    `;
  }
}
