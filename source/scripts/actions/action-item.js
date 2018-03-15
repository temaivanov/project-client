export default {
	'create-item': (item) => {
		return {
			type: 'create-item',
			item: item,
		}
	},
	'remove-item': (item) => {
		return {
			type: 'remove-item',
			item: item,
		}
	},
	'update-item': (item) => {
		return {
			type: 'update-item',
			item: item,
		}
	},
}
