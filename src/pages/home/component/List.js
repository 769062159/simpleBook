import React,{Component} from 'react'
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {
    Link
} from 'react-router-dom'
class List extends Component{
    render(){
        const {articleList,getMoreList,page}=this.props
        return(
            <div>
                {
                    articleList.map((item,index)=>(
                        <Link key={index} to={'/detail/'+item.get('id')}>
                            <ListItem >
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                                <img src={item.get('imgUrl')} alt=""/>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapState=(state)=>{
    return{
        articleList:state.getIn(['home','articleList']),
        page:state.getIn(['home','articlePage'])
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getMoreList(page){
            dispatch(actionCreators.getMoreList(page))
        }
    }
}
export default connect(mapState,mapDispatch)(List)