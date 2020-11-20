

$('.draggable').draggable({ cursor: 'crosshair', helper: 'clone' });

$('.draggable').droppable({
	accept: '.draggable',
	drop: function(event, ui) {
		let draggable = ui.draggable;
		let droppable = $(this);
		let pic1 = draggable.attr('src');

		draggable.attr('src', droppable.attr('src'));
		droppable.attr('src', pic1);
	}
});

