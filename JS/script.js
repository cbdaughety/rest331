$.ajax({
  url: 'http://localhost:8000/contact',
  dataType: 'jsonp',
  type: 'GET',
  success:function(json){
    alert("success");
    $.each(json, function(i, json) {
      $orders.append('<li>name: '+ people.firstName +','+ people.lastName +'</li>');
    })
  },
  error:function(){
    alert("error");
  }
});
/*$(function (){

  var $people = $('people')
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    data: 'id = 10',
    url: 'http://localhost:8000/contact',
    success: function(people) {
      $.each(people, function(i, people) {
        $orders.append('<li>name: '+ people.firstName +','+ people.lastName +'</li>');
      })
   }
  });
});
var invocation = new XMLHttpRequest();
var url = 'http://localhost:8000/contact';

function callOtherDomain() {
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
};*/
