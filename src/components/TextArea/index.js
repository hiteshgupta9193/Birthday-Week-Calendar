import "./styles.css";

export default class TextArea {
  constructor(
    id = "textArea",
    placeholder = "Enter your input here ....",
    value,
    error
  ) {
    this.id = id;
    this.placeholder = placeholder;
    this.value = value;
    this.error = error;
  }
  render() {
    return `
      <textarea class="text-area" placeholder="${this.placeholder}" id="${
      this.id
    }">${this.value || ""}</textarea>
    ${this.error ? `<div class="error">${this.error}</div>` : ""}
    `;
  }
}
