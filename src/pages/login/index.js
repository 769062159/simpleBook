import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'


class Login extends PureComponent{
    render(){
        const {loginStatus,login} = this.props
        if(loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' type='text' innerRef={(input)=>{this.account=input}}/>
                        <Input placeholder='密码' type='password' innerRef={(input)=>{this.pwd=input}}/>
                        <Button onClick={()=>login(this.account.value,this.pwd.value)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }

    }
}

const mapState=(state)=>({
    loginStatus: state.getIn('login','login')
})

const mapDispatch=(dispatch)=>({
    login(aObj,pObj){
        dispatch(actionCreators.loginb(aObj,pObj))
    }
})

export default connect(mapState,mapDispatch)(Login)