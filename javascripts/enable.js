$(function () {
  var $form = $(this);
  var $required = $form.find( ".required" );
  var $button = $form.find( "input[type=\"submit\"]" );
	
	var $required = $form.find( ".required" );
  
	// Bolds and adds an asterisk to required fields.
  $required.each( function ( index, item ) {
    var $item = $( item );
    var $label = $form.find( "label[for=\"" + $item.attr( "id" ) + "\"]" );
    var $htmlText = $label.html()
  
    $label.html( $htmlText + " *" )
    $label.css( "font-weight", "bold" );
  });
	
	// Updates the submit button if validated.
  var update = function () {
    if ( validate() ) {
      $button.removeAttr( "disabled" );
    } else {
      $button.attr( "disabled", "disabled" )
    };
  };
  
	// Validates that all the required fields are filled.
  var validate = function () {
    var number = 0;
    var validNumber = $required.length;
    
    $required.each( function ( index, field ) {
      if ( $( field ).val().trim() ) {
        number += 1;
      } else {
        return false;
      };
    });
    
    if ( number === validNumber ) {
      return true;
    };
  };
  
	// Adds event listener for any keyup within the form element.
  $form.on( "keyup", ".required", function (ev) {
    update();
  });
  
  $required.first().trigger( "keyup" );
  
});
