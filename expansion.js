// How to Use
// 
// <div class='parent of-iets-anders'>
// 		<div class="expand_trigger [active]"></div>
// 		<div class="expand [open]">Gedetailleerde informatie</div>
// </div>
// 

function removeExpansion($expand_trigger,$expand){
    if ($expand_trigger.html()=="-") {
        $expand_trigger.html("+");
    }
    $expand_trigger.removeClass('active');
    $expand.removeClass('open');
}

function addExpansion($expand_trigger,$expand){
    if ($expand_trigger.html()=="+") {
        $expand_trigger.html("-");
    }
    $expand_trigger.addClass('active');
    $expand.addClass('open');
}

function closeExpanded($expand_trigger,$expand){
    
    $('[data-js="trigger"]').each(function(index, el) {
        var expand_trigger  = $(this);
        var expand          = expand_trigger.parent().find('[data-js="target"]');
        var multiple        = false;

        if (expand_trigger.attr('data-trigger') != "multiple") {
            removeExpansion(expand_trigger,expand);
        } 
    });
}



$(document).ready(function(){
    $('html').on('click', function() {
        // Hide all the open popups except those with class multiple
       closeExpanded();
    }); 
    
    $('[data-js="trigger"]').parent().on('click', function(event) {
        
        var expand_trigger = $(this).find('[data-js="trigger"]');
        var expand = $(this).find('[data-js="target"]');

        if (expand_trigger.hasClass('active')) {
            removeExpansion(expand_trigger,expand)
        } else {
            closeExpanded(expand_trigger,expand); 
            addExpansion(expand_trigger,expand)
        }
                
        event.stopPropagation();
    
    });
       
    $('[data-js="target"]').on('click', function(event) {
        event.stopPropagation();
    });
});
