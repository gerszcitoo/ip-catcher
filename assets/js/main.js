import config from "../../config.js";

const sendEmailButton = document.getElementById("send-email");

async function getIpData() {
  try {
    let ipMessage = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${config.geoApiKey}`
    );
    ipMessage = await ipMessage.json();
    sendIpData(ipMessage);
  } catch (error) {
    console.log(error);
  }
}

async function sendIpData(answers) {
  emailjs
    .send("service_vxprkv5", "template_129mvzo", answers, config.emailjsApiKey)
    .then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

sendEmailButton.addEventListener("click", async () => {
  await getIpData();
});
