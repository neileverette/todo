$(document).ready(function(){

	var toAdd = $('#toAdd');
	var button = $('#button');
	    
	button.click(addItem());
    
	$(document).keypress(function(e) { //JQuery 
   		if(e.keyCode == 13) {
        addItem();
    }
	});
    
    $(document).on('click', '#button', function(){
    	toAdd.val('');
    });
    
    // FUNCTION TO APPEND TODO LIST
    function addItem(){
    	//$('.list').append('<div class = "item">' + toAdd.val() + '</div>');
    	console.log('I work');
    };
});