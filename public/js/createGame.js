var count = 2;

$('button#plus-button').click(function(){
	if (++count > 12)
	{
		count--;
	}
	else
	{
		var structure = $('<input id="name'+count+'" name="name'+count+'" class="form-control">');
		$('#inputs').append(structure);
	}
})

$('button#minus-button').click(function(){
	if(count > 1)
	{
		$('#name'+count).remove();
		count--;	
	}
});

