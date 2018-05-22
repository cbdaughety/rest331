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
    $contacts.append('<button id="edit" value='+contact._id+' onclick="putFunction(this)">Edit</button>');
    $contacts.append('<button id="delete" value='+contact._id+' onclick="deleteFunction(this)">Delete</button>');

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


});

function putFunction(element) {
  var value = element.value;
  //console.log(value);
  var $firstName = $('#firstName');
  var $lastName = $('#lastName');
  var $company = $('#company');
  var $email = $('#email');
  var $phone = $('#phone');

  document.getElementById("header").innerHTML = "Changing Contact:";
  document.getElementById("addContact").outerHTML = "<button type='submit' id='addContact' class='hidden'>Add Contact</button>";
  document.getElementById("changeContact").outerHTML = "<button type='submit' id='changeContact'>Change Contact</button>";

  $('#changeContact').click(function(event) {
      event.preventDefault();
      var newContact = new Object();
      newContact.firstName= $firstName.val();
      newContact.lastName= $lastName.val();
      newContact.company= $company.val();
      newContact.email= $email.val();
      newContact.phone= $phone.val();

      var newURL = url + value;


      $.ajax({
        type: "PUT",
        url: ""+newURL+"",
        contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        data: JSON.stringify(newContact),
        success: function(res) {
          console.log(res);
        }
      });
  });
};

function deleteFunction(elem) {
    var $contacts = $('#contacts');
  var value = elem.value;
  var newURL = url + value;
  $.ajax({
    url: newURL,
    type: 'DELETE',
    success: function(result) {
        console.log(result, "Success. Please reload the page.")
        $contacts.append('<li>Please refresh your page</li>');
    }
  });
};

/*var put = {
  "async": true,
  "crossDomain": true,
  "url": ""+ newURL +"",
  "method": "PATCH",
  "headers": {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  "processData": false,
  "data": "{\n\t\"firstName\": \""+firstName+"\",\n    \"lastName\": \""+lastName+"\",\n    \"email\": \""+email+"\",\n    \"company\": \""+company+"\",\n    \"phone\": "+phone+"\n}"
};*/
