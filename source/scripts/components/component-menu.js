import p__lodash__fp from 'lodash/fp'
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
import {
	Link as p__react_router_dom__link,
} from 'react-router-dom'
//
const $ = p__react_hyperscript
//
export default class component_menu extends p__react__pure_component {
	render = () => {
		return [
			$('div.navigation', [
				$('ul.list', [
					...p__lodash__fp.map(
						(item) => {
							return [
								$('li.list-item', {
									key: item,
								}, [
									$(p__react_router_dom__link, {
										to: item,
									}, [
										item,
									]),
								]),
							][0]
						}, [
							'/',
							'/table',
							'/list',
							'/component',
							'/clock',
							'/authorization',
						],
					),
				]),
			]),
		][0]
	}
}
