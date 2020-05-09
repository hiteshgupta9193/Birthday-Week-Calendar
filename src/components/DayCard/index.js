import NoResult from "../NoResult";
import { colors } from "../../constants";
import "./styles.css";

export default class DayCard {
  constructor(title, birthdays = []) {
    this.title = title;
    this.birthdays = birthdays;
  }
  sortBirthdays(birthdays) {
    return birthdays.sort((a, b) => (a.dateObj > b.dateObj ? -1 : 1));
  }
  getStyle(birthdays, index) {
    const sqroot = Math.sqrt(birthdays.length);
    const ratio = 100 / (sqroot === 1 ? 1 : Math.floor(sqroot) + 1);
    return `height:${ratio}%;width:${ratio}%;background-color:${
      colors[index % colors.length]
    };`;
  }
  render() {
    const sortedBirthdays = this.sortBirthdays(this.birthdays);
    return `
      <div class="day-card-container">
        <div class="day-card-title-container">${this.title}</div>
        <div class="day-card-birthdays-container${
          !sortedBirthdays.length ? " no-result" : ""
        }">
        ${
          sortedBirthdays.length
            ? sortedBirthdays
                .map(({ initials, birthday }, index) => {
                  return `<div class="birthday-item" style="${this.getStyle(
                    sortedBirthdays,
                    index
                  )}" title="${birthday}">${initials}</div>`;
                })
                .join("")
            : new NoResult().render()
        }
        </div>
        <div class="birthday-count">${
          sortedBirthdays.length
            ? `${sortedBirthdays.length} birthday${
                sortedBirthdays.length > 1 ? "s" : ""
              }`
            : "No birthdays"
        }</div>
      </div>
    `;
  }
}
