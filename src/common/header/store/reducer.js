import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
})

export default (state = defaultState, action)=>{
    switch (action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true)
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false)
        case actionTypes.HANDLE_ENTER:
            return state.set('mouseIn',true)
        case actionTypes.HANDLE_LEAVE:
            return state.set('mouseIn',false)
        case actionTypes.HANDEL_PAGE:
            return state.set('page',action.page)
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
             // return state.set('list',action.data).set('totalPage',action.totalPage)
        default:
            return state
    }
}