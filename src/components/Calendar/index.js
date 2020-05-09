import "./styles.css";
import DayCard from "../DayCard";
import { days } from "../../constants";

export default class Calendar {
  constructor(data) {
    this.data = data;
  }
  render() {
    return `
      <div class="calendar-container">
        ${days
          .map(day => {
            return `
          ${new DayCard(day, this.data[day]).render()}
        `;
          })
          .join("")}
      </div>
    `;
  }
}
