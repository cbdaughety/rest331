var get = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3001/contact/",
  "method": "GET",
  "headers": {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  "processData": false,
};

var $contacts = $('#contacts');

$(function (){
  $.ajax(get).done(function (response) {
    //console.log(response);
    $.each(response, function(i, contact) {
      $contacts.append('<li>First Name: '+ contact.firstName + '<br>Last Name: '+ contact.lastName + '<br>Company: '+ contact.company +'<br>Email: '+ contact.email +'<br>Phone#: ' + contact.phone +'</li>');
    });
  });
});
