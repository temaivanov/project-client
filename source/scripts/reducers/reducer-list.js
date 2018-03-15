const actions = {
	'create-item': (state, action) => {
		return {
			...state,
			items: [
				...state.items,
				action.item,
			],
		}
	},
	'remove-item': (state, action) => {
		return {
			...state,
			items: state.items.filter((item) => {
				return item.id !== action.item.id
			}),
		}
	},
	'update-item': (state, action) => {
		return {
			...state,
		}
	},
}
//
export default (
	state = {
		items: [
			{
				id: 0,
				key: 'key a',
				value: 'value a',
			},
			{
				id: 1,
				key: 'key b',
				value: 'value b',
			},
			{
				id: 2,
				key: 'key c',
				value: 'value c',
			},
		],
	},
	action,
) => {
	if (action.type in actions) {
		return actions[action.type](state, action)
	} else {
		return {
			...state,
		}
	}
}
