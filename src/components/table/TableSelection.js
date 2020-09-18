export class TableSelection {
	static className = 'selected'

	constructor() {
		this.group = []
		this.current = null
	}

	select($el) {
		this.clear()
		this.group.push($el)
		$el.focus().addClass('selected')
		this.current = $el
	}

	clear() {
		this.group.forEach($e => $e.removeClass(TableSelection.className))
		this.group = []
	}

	selectGroup($group = []) {
		this.clear()

		this.group = $group
		this.group.forEach($el => $el.addClass(TableSelection.className))
	}
}