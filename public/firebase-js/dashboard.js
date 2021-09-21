const welcomeInfo = document.querySelector("#welcomeInfo");
const balanceWrapper = document.querySelector("#balanceWrapper");
const profitWrapper = document.querySelector("#profitWrapper");
const totalDepositWrapper = document.querySelector("#totalDepositWrapper");
// get user details for dashboard
const getDashDetails = (user) => {
  if (user) {
    db.collection("users")
      .doc(user.uid)
      .onSnapshot((doc) => {
        const firstName = doc.data().firstName;
        const lastName = doc.data().lastName;
        const email = doc.data().email;
        const phone = doc.data().phone;
        const balance = doc.data().balance;
        const profit = doc.data().profit;
        const totalDeposit = doc.data().totalDeposit;

        // convert numbers into currency
        const balanceToNumber = Number(balance);
        const profitToNumber = Number(profit);
        const totalDepositToNumber = Number(totalDeposit);
        const currencyBalance = balanceToNumber.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });

        const currencyProfit = profitToNumber.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });

        const currencyTotalDeposit = totalDepositToNumber.toLocaleString(
          "en-US",
          {
            style: "currency",
            currency: "USD",
          }
        );

        // welcome info

        const welcomeHtml = `
        <div class="default cpanel_info">
          WELCOME: ${firstName + " " + lastName}
      </div>
        `;
        welcomeInfo.innerHTML = welcomeHtml;

        // Balances
        const balanceHtml = `
          <h3 class="color-white mb-5">${currencyBalance} USD</h3>
        `;
        balanceWrapper.innerHTML = balanceHtml;

        const profitHtml = `
          <h3 class="color-white mb-5">${currencyProfit}</h3>
        `;
        profitWrapper.innerHTML = profitHtml;

        const TotalDepositHtml = `
          <h3 class="color-white mb-5">${currencyTotalDeposit}</h3>
        `;
        totalDepositWrapper.innerHTML = TotalDepositHtml;
      });
  }
};
