console.log(3456789);

// Register function
const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = registerForm["firstname"].value;
  const lastName = registerForm["lastname"].value;
  const email = registerForm["email"].value;
  const phone = registerForm["phone"].value;
  const password = registerForm["password"].value;
  const confirm_password = registerForm["confirm_password"].value;
  const formError = document.querySelector("#formError");
  let message = null;

  console.log(firstName, lastName, email, phone);

  // Front end auth

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phone === "" ||
    password === ""
  ) {
    message = `
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
      No field can be left blank. Please make sure you fill all the available fields to proceed.
    </div>
    `;
  } else if (password !== confirm_password) {
    message = `
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
      Passwords do not match. Please try again.
    </div>
    `;
  } else {
    registerForm["registerSubmit"].disabled = true;
    registerForm["registerSubmit"].textContent = "Loading...";
    auth.createUserWithEmailAndPassword(email, password).then(function (user) {
      db.collection("users")
        .doc(user.user.uid)
        .set({
          firstName,
          lastName,
          email,
          phone,
          balance: 0,
          profit: 0,
          totalDeposit: 0,
        })
        .then(() => {
          window.location.replace("../account/dashboard.html");
        });
    });
  }
  formError.innerHTML = message;
});
