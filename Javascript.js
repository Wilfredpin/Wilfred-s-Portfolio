// Copy of Email

function copyEmail() {
  const email = "Wilfredlovez13@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied Successfully: " + email);
    })
    .catch((err) => {
      console.error("Failed to copy email: ", err);
    });
}

// HAMBURGER MENU
