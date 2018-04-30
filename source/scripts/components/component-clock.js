import p__moment from 'moment'
import p__react_hyperscript from 'react-hyperscript'
//
import {
	PureComponent as p__react__pure_component,
} from 'react'
//
const $ = p__react_hyperscript
//
export default class component_clock extends p__react__pure_component {
	state = {
		time: new p__moment(),
	}
	methods = {
		tick: () => {
			this.setState({
				time: new p__moment(),
			})
		},
	}
  componentDidMount = () => {
    this.interval = setInterval(
      this.methods.tick,
      1000,
    )
  }
  componentWillUnmount = () =>{
		clearInterval(this.interval)
  }
	render = () => {
		return [
			$('div', [
				this.state.time.format('HH:mm:ss'),
			]),
		][0]
	}
}
