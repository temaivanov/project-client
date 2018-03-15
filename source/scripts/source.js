import '../root/favicon.png'
import '../styles/source.sass'
import '../templates/index.pug'
//
import p__react_hyperscript from 'react-hyperscript'
//
import {
	render as p__react_dom__render,
} from 'react-dom'
//
import m__components__apps__app_index from './components/app-index'
import m__modules__load from './modules/module-load'
//
const $ = p__react_hyperscript
const container = document.createElement('div')
p__react_dom__render(
	$(m__components__apps__app_index),
	container,
)
m__modules__load(document, (element) => {
	element.body.appendChild(container)
})
