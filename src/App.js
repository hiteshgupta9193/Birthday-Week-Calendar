import Header from "./components/Header";
import Calendar from "./components/Calendar";
import TextArea from "./components/TextArea";
import Button from "./components/Button";
import ErrorChip from "./components/ErrorChip";
import { data, convertData } from "./dataUtils";
import "./AppStyles.css";

export class App {
  constructor(jsonData = data, selectedYear = 2020, error) {
    this.jsonData = jsonData;
    this.selectedYear = selectedYear;
    this.error = error;
  }
  render() {
    const convertedData = this.error
      ? {}
      : convertData(this.jsonData, this.selectedYear);
    return `
      ${new Header("Work Area").render()}
      ${new Calendar(convertedData).render()}
      <div class="action-container">
        ${new TextArea(
          "textInput",
          "Enter your input here ....",
          JSON.stringify(this.jsonData)
        ).render()}
        <div class="year-selector">
          <div class="year-label">Year</div>
          ${new TextArea(
            "yearInput",
            "Enter Year",
            `${this.selectedYear}`
          ).render()}
          <div class="btn-container">
            ${new Button("UPDATE", "updateBtn", "primary").render()}
          </div>
        </div>
      </div>
    `;
  }
  addListeners() {
    document
      .getElementById("updateBtn")
      .addEventListener("click", function(event) {
        let textInputVal = {};
        let yearInputVal = "";
        let error;
        try {
          textInputVal = JSON.parse(document.getElementById("textInput").value);
        } catch (e) {
          error = "Error: Invalid JSON Input";
          textInputVal = document.getElementById("textInput").value;
        }
        try {
          yearInputVal = parseInt(
            document.getElementById("yearInput").value,
            10
          );
          if (!yearInputVal || yearInputVal.toString().length !== 4) {
            throw new Error();
          }
        } catch (e) {
          error = "Error: Invalid Year Input";
          yearInputVal = document.getElementById("yearInput").value;
          console.log("Error: Invalid Year Input");
        }
        if (error) {
          new ErrorChip(error).render();
        }
        const appInstance = new App(textInputVal, yearInputVal, error);
        document.getElementById("app").innerHTML = appInstance.render();
        appInstance.addListeners();
      });
  }
}
