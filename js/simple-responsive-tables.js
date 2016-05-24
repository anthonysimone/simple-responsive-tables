/**
 * Call on table to make them behave responsively behave responsively
 *
 * jQuery plugin template from
 * https://github.com/jquery-boilerplate/jquery-patterns/blob/master/patterns/jquery.basic.plugin-boilerplate.js
 */
;(function ( $, window, document, undefined ) {

  // Create the defaults once
  var pluginName = "responsiveTables",
    defaults = {
      responsiveTableClass: "responsive-table"
    };

  // The actual plugin constructor
  function ResponsiveTables( element, options ) {
    this.element = element;

    // Get merge defined options with defaults
    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  ResponsiveTables.prototype = {

    init: function() {
      // Place initialization logic here
      // You have access to the DOM element and the options via the instance,
      // e.g. this.element and this.options
      var $table = $(this.element),
        $headers = $table.find('thead th'),
        $rows = $table.find('tbody tr');

      // Check to make sure headers exists before processing
      if ($headers.length > 0) {
        // Add responsive class to table
        $table.addClass(this.options.responsiveTableClass);

        // Iterate through rows, attaching the proper label from the corresponding th
        $rows.each(function() {
          var $cells = $(this).find('td');
          $cells.each(function(index) {
            $(this).attr('data-label', $headers[index].textContent);
          });
        });
      }
    }

  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName,
          new ResponsiveTables( this, options ));
      }
    });
  };

})( jQuery, window, document );