document.addEventListener("DOMContentLoaded", () => {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_";
  const form = document.getElementById("password-form");
  const output = document.getElementById("output");

  generatePassword();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    generatePassword();
  });

  function generatePassword() {
    const length = document.getElementById("length").value;
    const mixedCases = document.getElementById("mixedCases").checked;
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = getRandomInt(charset.length);
      let character = charset.charAt(randomIndex);

      if (mixedCases && i % 3 === 0) {
        character = character.toUpperCase();
      }

      password += character;
    }

    output.textContent = password;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
});
