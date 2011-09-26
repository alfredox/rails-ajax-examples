jQuery(function($) {
  // when the #address_zip_code field changes
  $(".zip_code_autocomplete").change(function() {
    var selectorId = $(this).attr('id'),
        lastIndex = selectorId.lastIndexOf('zip_code'),
        selectorPrefix = selectorId.slice(0, lastIndex) ;

    $.get('/addresses/autocomplete_with_zip', 'zip_code=' + $(this).val(), function(data) {
      $.assignJSONToInputFields(selectorPrefix, data) ;
    });
  });

  // using the data in json, it assigns the value to
  $.assignJSONToInputFields = function (selectorPrefix, json) {
    for (var key in json) {
      var $inputTag = $('#' + selectorPrefix + key) ;
      if ($inputTag.prop('tagName') == 'SELECT') {
        $inputTag.html($.createHTMLOptionsStringFromCollection(json[key])) ;
      }
      else {
        // normal assignation
        $inputTag.val(json[key]) ;
      }
    }
  } ;

  $.createHTMLOptionsStringFromCollection = function (collection) {
    if (collection instanceof Array) {
      var optionString = '' ;
      for (var elementIndex in collection) {
        var element = collection[elementIndex] ;
        if (element instanceof Array)
          optionString = optionString + '<option value="' + element[1] +'">' + element[0] + '</option>'
        else
          optionString = optionString + '<option value="' + element +'">' + element + '</option>' ;
      }
      return optionString ;
    }
    else {
      return "<option>" + collection + "</option>" ;
    }
  } ;
})