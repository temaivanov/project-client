import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
import m__component_list from './component-list'
//
const $ = p__react_hyperscript
//
export default class page_list extends p__react__pure_component {
	render = () => {
		return [
			$(m__component_list),
		][0]
	}
}
