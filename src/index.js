import "./styles.css";
import { App } from "./App";

const appObj = new App();
document.getElementById("app").innerHTML = `
  ${appObj.render()}
`;
appObj.addListeners();
