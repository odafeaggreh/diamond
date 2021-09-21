const wallet_add = document.querySelector("#wallet_add");

db.collection("wallet_address")
  .doc("u8hCAj7K607t1yphbSib")
  .onSnapshot((doc) => {
    const wallet = `
        <div class="text-red">
            ${doc.data().btc}
        </div>
    
    `;

    wallet_add.innerHTML = wallet;
  });
