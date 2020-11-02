window.addEventListener("load", function() {
    Getbooking();

});

function Getbooking() {
    let url = 'https://sheet.best/api/sheets/4326732f-45fc-4dc5-a0bb-c6deee24b643';
    fetch(url)
    .then((response) => response.json())
    .then(data => {
    // Do something with the data
     // console.log(json.bookings);
      var bookings = document.getElementById("booking-list");
      var bookingIds = [];
      //declare button

      
      for (var i = 0; i < data.length; i++) {
        var gId = data[i].Id;
        var gName = data[i].name;
        var gPhone = data[i].phone;
        var gEmail = data[i].email;
        var gPax = data[i].pax;
        var gCheckin = data[i].checkin;
        var gCheckout = data[i].checkout;
        var buttonId = "delete" + gId;
        
        let row = bookings.insertRow(bookings.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gPhone;
        row.insertCell(3).innerHTML = gEmail;
        row.insertCell(4).innerHTML = gPax;
        row.insertCell(5).innerHTML = gCheckin;
        row.insertCell(6).innerHTML = gCheckout;
        row.insertCell(7).innerHTML = "<button id='" + buttonId + "'class='btn btn-danger'>Delete</button><br/>";

        
        
        bookingIds.push(buttonId);
        
        
      }
      
      for (let j= 0; j < bookingIds.length; j++) {
        let el = document.getElementById(bookingIds[j]);
        el.addEventListener("click", function() {
          let theId = bookingIds[j].replace("delete", "");
          DeleteBooking(theId);
          
        })
      }
    });
  }

//untuk delete function

  function DeleteBooking(id) {

    if(confirm("Are you sure you want to delete?")) {  
      let url = 'https://sheet.best/api/sheets/4326732f-45fc-4dc5-a0bb-c6deee24b643' + id;
      fetch(url, {
        method: 'DELETE',
      })
        .then((response) => {
          location.reload();
        });

    } else {
        alert("Delete cancelled");
    }

  }

