import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
import m__component_clock from './component-clock'
//
const $ = p__react_hyperscript
//
export default class page extends p__react__pure_component {
	render = () => {
		return [
			$(m__component_clock),
		][0]
	}
}
