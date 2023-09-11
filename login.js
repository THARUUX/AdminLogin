function submitLogin(event) {

    let inputElementOnUser = document.getElementById("username");
    let username = inputElementOnUser.value;

    let inputElementOnPass = document.getElementById("password");
    let password = inputElementOnPass.value;


    if (username === "Tharuu") {

        if ( password === "tharuux1221" ) {
            window.open("https:docs.google.com/spreadsheets/d/1KCgE82gl5xVAJ88vT1ok8xMXqaSLVkSe9FqJcA2IUmQ/edit?usp=sharing");
          } else {
            window.alert("Your Password was wrong.");
          }

      } else if (username === "Menaka") {

        if ( password === "menaka1234" ) {
            window.open("https:docs.google.com/spreadsheets/d/1KCgE82gl5xVAJ88vT1ok8xMXqaSLVkSe9FqJcA2IUmQ/edit?usp=sharing");
          } else {
            window.alert("Your Password was wrong.");
          }

      } else if (username === "Neo") {

        if ( password === "neo44" ) {
            window.open("https:docs.google.com/spreadsheets/d/1KCgE82gl5xVAJ88vT1ok8xMXqaSLVkSe9FqJcA2IUmQ/edit?usp=sharing");
          } else {
            window.alert("Password was wrong.");
          }

      } else if (username === "Abi") {

        if ( password === "abi12345" ) {
            window.open("https:docs.google.com/spreadsheets/d/1KCgE82gl5xVAJ88vT1ok8xMXqaSLVkSe9FqJcA2IUmQ/edit?usp=sharing");
          } else {
            window.alert("Your Password was wrong.");
          }

      } else {
        window.alert("Your username or password was wrong.");
      }

}

