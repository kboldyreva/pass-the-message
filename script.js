function getMessage(){

    let message = document.getElementById("entry").value;
    document.getElementById("message").innerHTML = message;
    document.getElementById("entry").value = "";
  }