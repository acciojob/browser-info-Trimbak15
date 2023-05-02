//your JS code here. If required.
//get the info of the browser
let browseName = navigator.appName;
let version = navigator.appVersion;

// display message

let message = "You are using "+browseName+" version "+version;

const divElement = document.getElementById("browser-info");
divElement.textContent = message;