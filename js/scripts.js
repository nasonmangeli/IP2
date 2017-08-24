function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


var resetField= function() {
  $('#email').val("");
}




$(document).ready(function() {
  $('.form-inline').submit(function(event) {
    var email = $('#email').val();
    $('.subdetails').text(email + " has been successfully added to our email list. Thank you.");
    resetField();
    event.preventDefault();
  })
});
