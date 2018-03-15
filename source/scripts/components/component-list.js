import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
import {
	connect as p__react_redux__connect,
} from 'react-redux'
import {
	bindActionCreators as p__redux__bind_action_creators,
} from 'redux'
//
import m__action_item from '../actions/action-item'
//
const $ = p__react_hyperscript
const source = class component_list extends p__react__pure_component {
	state = {
		id: '',
		new_item_key: '',
		new_item_value: '',
	}
	handle_change = (event) => {
		console.log(event.target.id)
		this.setState({
			...this.state,
			[event.target.id]: event.target.value,
		})
	}
	handle_submit = (event) => {
		event.preventDefault()
		const get_id = () => {
			return Math.random().toString(36).substr(2, 9)
		}
		if (this.state.new_item_key && this.state.new_item_value) {
			console.log('done')
			const item = {
				id: get_id(),
				key: this.state.new_item_key,
				value: this.state.new_item_value,
			}
			this.props['list-actions']['create-item'](item)
			this.setState({
				new_item_key: '',
				new_item_value: '',
			})
		} else {
			//alert('fill in the \'KEY\' and \'VALUE\' fields')
		}
	}
	handle_remove = (item) => {
		this.props['list-actions']['remove-item'](item)
	}
	handle_update = (item) => {
		console.log(item.value)
		this.setState({
			id: item.id,
			new_item_key: item.key,
			new_item_value: item.value,
		})
		const update = {
			id: item.id,
			key: this.state.new_item_key,
			value: this.state.new_item_value,
		}
		this.props['list-actions']['remove-item'](update)
	}
	items = (items) => {
		return [
			$('ul.list', items.map(
				(item) => {
					return [
						$('li.list__item', {
							key: item.id,
						}, [
							$('div.list__key', [
								item.key,
							]),
							$('div.list__value', [
								item.value,
							]),
							$('button.list__remove-btn.btn', {
								onClick: () => {
									return this.handle_remove(item)
								},
							}, [
								'remove',
							]),
							$('button.list__edit-btn.btn', {
								onClick: () => {
									return this.handle_update(item)
								},
							}, [
								'edit',
							]),
						]),
					][0]
				},
			)),
		][0]
	}
	render = () => {
		return [
			$('div', [
				$('div', [
					$('label.app__key-label', [
						'key',
						$('input.app__key-input', {
							id: 'new_item_key',
							type: 'text',
							value: this.state.new_item_key,
							onChange: this.handle_change,
						}),
					]),
				]),
				$('div', [
					$('label.app__value-label', [
						'value',
						$('input.app__value-input', {
							id: 'new_item_value',
							type: 'text',
							value: this.state.new_item_value,
							onChange: this.handle_change,
						}),
					]),
				]),
				$('div', [
					$('button.app__submit-btn.btn', {
						onClick: this.handle_submit,
					}, [
						'submit',
					]),
				]),
				this.items(this.props.list.items),
			]),
		][0]
	}
}
const map_to_props_state = (state) => {
	return state
}
const map_to_props_dispatch = (dispatch) => {
	return {
		'list-actions': p__redux__bind_action_creators(m__action_item, dispatch),
	}
}
const connection = p__react_redux__connect(
	map_to_props_state,
	map_to_props_dispatch,
)
//
export default connection(source)
