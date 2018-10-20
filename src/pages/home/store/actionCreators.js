import axios from "axios/index";
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
const changeHomeData=(result)=>({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
})
const addHomeList=(list,nextPage)=>({
    type:actionTypes.ADD_HOME_LIST,
    list:fromJS(list),
    nextPage
})
export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            dispatch(changeHomeData(res.data.data))
        })
    }
}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then(res=>{
            dispatch(addHomeList(res.data.data,page+1))
        })
    }
}

export const toggleTopShow=(showScroll)=>({
    type:actionTypes.TOGGLE_SCROLL_TOP,
    showScroll
})