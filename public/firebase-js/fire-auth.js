auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    getDashDetails(user);
    console.log(user.uid);
  } else {
    // User is signed out.
    console.log("user is logged out");
    window.location.replace("../login.html");
  }
});
