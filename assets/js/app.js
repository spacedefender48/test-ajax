;(function($, document, window) {

    var $doc = $( document );
    var $win = $( window );

    $doc.ready(function(){
        $.getJSON('assets/json/example.json')
            .done(function(data) {
                alert('Loading successful.');
            })
            .fail(function() {
                alert('Error loading file.');
            });

        var $events_wrapper = $( '.events-wrap' );
        var $tables_wrapper = $( '.time-tables-wrap' );
        var $desc_wrapper = $( '.description-wrap' );

        
    });

})(jQuery, document, window);