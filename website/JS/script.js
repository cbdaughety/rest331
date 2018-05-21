var get = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3001/contact/",
  "method": "GET",
  "headers": {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  },
  "processData": false,
};

var url = 'http://localhost:3001/contact/';

$(function (){

  var $contacts = $('#contacts');
  var $firstName = $('#firstName');
  var $lastName = $('#lastName');
  var $company = $('#company');
  var $email = $('#email');
  var $phone = $('#phone');

  function populateContacts(contact){
    $contacts.append('<li>First Name: '+ contact.firstName + '<br>Last Name: '+ contact.lastName + '<br>Company: '+ contact.company +'<br>Email: '+ contact.email +'<br>Phone#: ' + contact.phone +'</li>');
  };

  $.ajax(get).done(function (response) {
    //console.log(response);
    $.each(response, function(i, contact) {
      populateContacts(contact);
    });
  });

  $('#addContact').click(function() {
      $.post(url,
      {
        firstName: $firstName.val(),
        lastName: $lastName.val(),
        company: $company.val(),
        email: $email.val(),
        phone: $phone.val()
      },
      function(data, status){
        populateContacts(data);
      });

  });

  //Next is 'put' request. todo figure out how i want to save id's

});
