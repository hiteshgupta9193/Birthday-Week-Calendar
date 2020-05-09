import "./styles.css";

class ErrorChip {
  constructor(text) {
    this.text = text;
  }
  render() {
    document.getElementById("error").innerHTML = `<div class="error-message">${
      this.text
    }</div>`;
    setTimeout(() => {
      document.getElementById("error").innerHTML = "";
    }, 5000);
  }
}

export default ErrorChip;
