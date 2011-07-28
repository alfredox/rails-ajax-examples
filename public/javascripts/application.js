jQuery(function($) {
  // when the #address_zip_code field changes
  $("#address_zip_code").change(function() {
    $.get('/addresses/autocomplete_with_zip', function(data) {
      $.assignJSONToInputFields(data) ;
    });
  });

  // using the data in json, it assigns the value to
  $.assignJSONToInputFields = function (json) {
    for (var key in json) {
      //console.log('json[\''+key+'\'] is ' + json[key]) ;
      $('#address_' + key).val(json[key]) ;
    }
  } ;
})