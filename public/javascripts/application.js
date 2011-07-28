// Append the function to the "document ready" chain
jQuery(function($) {
  // when the #search field changes
  $("#address_zip_code").change(function() {
    alert('address_zip_code changed') ;
  });
})