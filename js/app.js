$(document).ready(function() {
	// Toggle item completion
	$('.shopping-list').on('click', '.shopping-item-toggle', function() {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
	})

	// Delete item
	$('.shopping-list').on('click', '.shopping-item-delete', function() {
		$(this).closest('li').remove()
	})

	// Add item
	$('#js-shopping-list-form').submit(function(event) {
		addItem()
		event.preventDefault()
	})
})

function addItem() {
	var itemTitle = `<span class="shopping-item">${$('#shopping-list-entry').val()}</span>`
	var itemControls = '<div class="shopping-item-controls"></div>'
	var itemToggle = '<button class="shopping-item-toggle"></button>'
	var itemDelete = '<button class="shopping-item-delete"></button>'
	var spanToggle = '<span class="button-label">check</span>'
	var spanDelete = '<span class="button-label">delete</span>'
	$('.shopping-list').prepend('<li></li>')
	$('.shopping-list').children().first().prepend(itemTitle, itemControls)
	$('.shopping-list').children().first().children().last().append(itemToggle, itemDelete)
	$('.shopping-list').children().first().find('.shopping-item-toggle').prepend(spanToggle)
	$('.shopping-list').children().first().find('.shopping-item-delete').prepend(spanDelete)
}