import axios from "axios/index";
import * as actionTypes from './actionTypes'

const changeDetail=(data)=>({
    type:actionTypes.CHANGE_DETAIL,
    title: data.title,
    content: data.content
})
export const getDetail=(id)=>{
    return (dispatch=>{
        axios.get('/api/detail.json?id='+id).then(res=>{
            dispatch(changeDetail(res.data.data))
        })
    })
}