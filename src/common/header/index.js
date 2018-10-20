import React,{Component} from 'react'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as LoginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from "./style";


class Header extends Component{
    getListArea(){
        const {totalPage,focused,list,page,handleEnter,handleLeave,mouseIn,handleChangePage}=this.props
        const pageList=[]
        const jsList=list.toJS()
        if(jsList.length){
            for(let i = (page-1) * 10; i < page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused||mouseIn){
            return (
                <SearchInfo
                    onMouseLeave={handleLeave}
                    onMouseEnter={handleEnter}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login,logout}=this.props
        return(
            <HeaderWrapper>
                <Link to='/'><Logo /></Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    {login?
                        <NavItem className='right' onClick={()=>logout()}>退出</NavItem>
                        :
                        <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                    }

                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused?'focused':''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe64d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'><Button className='write'><i className='iconfont'>&#xe96c;</i>写文章</Button></Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(list){
            (list.size===0)&&dispatch(actionCreators.getList())
            /*if(list.size>0){
                dispatch(actionCreators.getList())
            }*/
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleEnter(){
            dispatch(actionCreators.handleEnter())
        },
        handleLeave(){
            dispatch(actionCreators.handleLeave())
        },
        handleChangePage(page,totalPage,spin){
            if(page<totalPage){
                dispatch(actionCreators.handleChangePage(page+1))
            }else{
                dispatch(actionCreators.handleChangePage(1))
            }
        },
        logout(){
            dispatch(LoginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)