jQuery(function($) {
  // when the #address_zip_code field changes
  $(".zip_code_autocomplete").change(function() {
    var selectorId = $(this).attr('id'),
        lastIndex = selectorId.lastIndexOf('zip_code'),
        selectorPrefix = selectorId.slice(0, lastIndex) ;

    $.get('/addresses/autocomplete_with_zip', function(data) {
      $.assignJSONToInputFields(selectorPrefix, data) ;
    });
  });

  // using the data in json, it assigns the value to
  $.assignJSONToInputFields = function (selectorPrefix, json) {
    for (var key in json) {
      $('#' + selectorPrefix + key).val(json[key]) ;
    }
  } ;
})