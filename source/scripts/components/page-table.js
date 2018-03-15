import p__lodash__fp from 'lodash/fp'
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class page_table extends p__react__pure_component {
	state = {
		table: [
			['a', 'b', 'c'],
		],
	}
	render = () => {
		return [
			$('div', [
				$('div', [
					$('button', {
						onClick: this.method,
					}, [
						'method',
					]),
				]),
				$('div', [
					$('table', [
						$('tbody', [
							...p__lodash__fp.map(
								(item) => {
									return [
										$('tr', [
											...p__lodash__fp.map(
												(item) => {
													return [
														$('td', [
															item,
														]),
													][0]
												},
												item,
											),
										]),
									][0]
								},
								this.state.table,
							),
						]),
					]),
				]),
			]),
		][0]
	}
	method = () => {
		this.setState({
			...this.state,
			table: [
				...this.state.table,
				['a', 'b', 'c'],
			],
		})
	}
}
