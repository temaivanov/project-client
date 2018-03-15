import {
	routerReducer as p__react_router_redux__router_reducer,
} from 'react-router-redux'
import {
	combineReducers as p__redux__combine_reducers,
} from 'redux'
//
import m__reducers__reducer_list from '../reducers/reducer-list'
//
export default p__redux__combine_reducers({
	list: m__reducers__reducer_list,
	router: p__react_router_redux__router_reducer,
})
