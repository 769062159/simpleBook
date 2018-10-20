import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'

const changeList = (data)=> ({
    type: actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
})

export const searchFocus = ()=> ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = ()=> ({
    type: actionTypes.SEARCH_BLUR
})

export const handleEnter = () => ({
    type: actionTypes.HANDLE_ENTER
})
export const handleLeave = () => ({
    type: actionTypes.HANDLE_LEAVE
})
export const handleChangePage = (page)=>({
    type:actionTypes.HANDEL_PAGE,
    page
})
export const getList = (data) =>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            dispatch(changeList(res.data.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}