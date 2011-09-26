jQuery(function($) {

  // plugin: name ajaxDataCall //temporal
  (function( $ ){
    $.fn.ajaxDataCall = function(url, fieldName) {

      var createHTMLOptionsStringFromCollection = function (collection) {
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

      // using the data in json, it assigns the value to each selector
      var assignJSONToInputFields = function (selectorPrefix, json) {
        for (var key in json) {
          var $inputTag = $('#' + selectorPrefix + key) ;
          if ($inputTag.prop('tagName') == 'SELECT') {
            $inputTag.html(createHTMLOptionsStringFromCollection(json[key])) ;
          }
          else {
            // normal assignation
            $inputTag.val(json[key]) ;
          }
        }
      } ;

      // main function
      return this.each(function() {

        // acts with the change event
        $(this).change(function() {
          // finds the prefix of the selector, so it can be used to find the other selectors
          // to update
          var selectorId = $(this).attr('id'),
              lastIndex = selectorId.lastIndexOf(fieldName),
              selectorPrefix = selectorId.slice(0, lastIndex) ;

          $.get(url, fieldName + '=' + $(this).val(), function(data) {
            assignJSONToInputFields(selectorPrefix, data) ;
          });
        });
      }) ;
    };
  })( jQuery );

  $(".zip_code_autocomplete").ajaxDataCall('/addresses/autocomplete_with_zip', 'zip_code');

})