import React,{Component} from 'react'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { actionCreators } from './store'
import {connect} from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
class Home extends Component{
    componentDidMount(){
        this.props.changeHomeData()
        this.bindEvents()
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    handleScrollTop=()=>{
        document.body.scrollTop = 0;
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4448/4526b216a4eaac6a92b1c987ac9bb544c9f37937.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll?
                    <BackTop onClick={()=>this.handleScrollTop()}>回到顶部</BackTop>
                    :null}
            </HomeWrapper>
        )
    }
}

const mapState=(state)=>({
    showScroll:state.get(['home','showScroll'])
})
const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>300){
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState,mapDispatch)(Home)