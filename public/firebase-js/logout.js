const logoutBtn = document.querySelector("#logout");

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      window.location.replace("../login.html");
    })
    .catch(function (error) {
      // An error happened.
      console.log(error);
    });
});
