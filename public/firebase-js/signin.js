console.log(3456789);
// Login

const signForm = document.querySelector("#signForm");

signForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signForm["email"].value;
  const password = signForm["password"].value;
  const loginFormError = document.querySelector("#loginFormError");
  const message = null;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function (response) {
      signForm["signinFormBtn"].disabled = true;
      signForm["signinFormBtn"].textContent = "Loading...";

      window.location.replace("../account/dashboard.html");
    })
    .catch(function (error) {
      console.log(error.code);

      if (error.code === "auth/user-not-found") {
        loginFormError.innerHTML = `
          <div style="
          height: 60px;
          width: 100%;
          margin: 20px 0;
          padding: 1rem;
          color: #842029;
          background-color: #f8d7da;
          border-color: #f5c2c7;
          text-align: center;
          border: 1px solid transparent;
          border-radius: .25rem;

          ">
            You are not registered as a user. Please register
          </div>
        `;
      } else if (error.code === "auth/wrong-password") {
        loginFormError.innerHTML = `
        <div style="
        height: 60px;
        width: 100%;
        margin: 20px 0;
        padding: 1rem;
        color: #842029;
        background-color: #f8d7da;
        border-color: #f5c2c7;
        text-align: center;
        border: 1px solid transparent;
        border-radius: .25rem;

        ">
          The password you have entered is incorrect.
        </div>
      `;
      } else if (error.code === "auth/too-many-requests") {
        loginFormError.innerHTML = `
        <div style="
        height: auto;
        max-height: 90px;
        width: 100%;
        margin: 20px 0;
        padding: 1rem;
        color: #842029;
        background-color: #f8d7da;
        border-color: #f5c2c7;
        text-align: center;
        border: 1px solid transparent;
        border-radius: .25rem;

        ">
          You have entered an incorrect password too many times and your account has been temporarily disabled. Please try again after a few minutes or reset your password.
        </div>
      `;
      }
      signForm["signinFormBtn"].disabled = false;
      signForm["signinFormBtn"].textContent = "login";

      console.log("It works");
    });
});
