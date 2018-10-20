import axios from "axios/index";
import * as actionTypes from './actionTypes'

const changeLogin=()=>({
    type:actionTypes.CHANGE_LOGIN,
    value:true
})

export const logout=()=>({
    type:actionTypes.CHANGE_LOGOUT,
    value:false
})

export const loginb=(account,pwd)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+pwd).then(res=>{
            if(res.data.data){
                dispatch(changeLogin())
            }else{
                alert('登录失败')
            }
        })
    }
}