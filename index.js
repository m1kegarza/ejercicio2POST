const form = document.getElementById("form");
const sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").value;
  const data = {
    firstName,
    lastName,
    email,
    country,
  };
  fetch("https://interview-back-ucampers.vercel.app/interview", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
