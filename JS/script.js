
$(function (){

  var $people = $('people')
  $.ajax({
    type: 'GET',
    url: './src/routes/routes.js',
    success: function(people) {
      $.each(people, function(i, people) {
        $orders.append('<li>my people</li>');
      })
    }
  });

});
