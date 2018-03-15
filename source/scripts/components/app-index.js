import p__react_hyperscript from 'react-hyperscript'
//
import {
	Component as p__react__component,
} from 'react'
import {
	Provider as p__react_redux__provider,
} from 'react-redux'
import {
	BrowserRouter as p__react_router_dom__browser_router,
	Route as p__react_router_dom__route,
} from 'react-router-dom'
//
import m__component_menu from './component-menu'
import m__component_navigation from './component-navigation'
import m__page from './page'
import m__page_table from './page-table'
import m__page_list from './page-list'
import m__page_component from './page-component'
import m__page_clock from './page-clock'
import m__page_authorization from './page-authorization'
import m__stores__list from '../stores/store-list'
//
const $ = p__react_hyperscript
//
export default class app_index extends p__react__component {
	render = () => {
		return [
			$(p__react_redux__provider, {
				store: m__stores__list(),
			}, [
				$(p__react_router_dom__browser_router, {
					basename: process.env.PUBLIC_URL,
				}, [
					$([
						$(m__component_menu),
						$(m__component_navigation),
						$('div.container', [
							$(p__react_router_dom__route, {
								exact: true,
								path: '/',
								component: m__page,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/table',
								component: m__page_table,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/list',
								component: m__page_list,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/component',
								component: m__page_component,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/clock',
								component: m__page_clock,
							}),
							$(p__react_router_dom__route, {
								exact: true,
								path: '/authorization',
								component: m__page_authorization,
							}),
						]),
					]),
				]),
			]),
		][0]
	}
}
