function BookNow(guestName,guestPhone,guestEmail,guestPax,guestIn,guestOut) {
    let body = {
            name: guestName,
            phone: guestPhone,
            email: guestEmail,
            pax: guestPax,
            checkin: guestOut,
            checkout: guestIn
        
    }

  fetch('https://sheet.best/api/sheets/4326732f-45fc-4dc5-a0bb-c6deee24b643', {
    method: 'POST',
    mode:'cors',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then(data => {
    // Do something with object
        console.log(data);
        alert(data.name + " sucessfully added!");
        
  });
}

window.addEventListener("load", function() {

    document.getElementById("bookNow").addEventListener("click", function(){
        let name = document.getElementById("guestName").value;
        let phone = document.getElementById("guestPhone").value;
        let email = document.getElementById("guestEmail").value;
        let pax = document.getElementById("guestPax").value;
        let checkin = document.getElementById("guestIn").value;
        let checkout = document.getElementById("guestOut").value;

        BookNow(name, phone, email, pax, checkin, checkout);

    });

});