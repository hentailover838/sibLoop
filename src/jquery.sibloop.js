;(function($){
    
    "use strict";
    
    // Get next or first element, filtered by selector
	$.fn.loopNext = function(selector) {
        
        // Loop through the jQuery set
        return this.map(function(){
            
            var $this = $(this);
            
            // Return either .next() or the first matching element in the set
            return ($this.next(selector).length > 0) ? $this.next(selector) : $this.prevAll(selector).last();
        });
    };
    
    
    // Get previous or last element, filtered by selector
    $.fn.loopPrev = function(selector) {
        
        // Loop through the jQuery set
        return this.map(function(){
            
            var $this = $(this);
            
            // Return either .prev() or the last matching element in the set
            return ($this.prev(selector).length > 0) ? $this.prev(selector) : $this.nextAll(selector).last();
        });
    };
    
})(jQuery);