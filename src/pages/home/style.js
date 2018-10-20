import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`

export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    margin-top:30px;
    float:left;
    .banner-img{
    width:625px;
    height:270px;
    }
`

export const HomeRight = styled.div`
    width:280px;
    margin-top:30px;
    float:right;
`

export const TopicWrapper =styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left: -18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem =styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    img{
        width:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
`

export const ListItem=styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    img{
        width:125px;
        height:100px;
        float:right;
        display:block;
        border-radius:10px;
    }
`
export const ListInfo=styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`

export const RecommendWrapper=styled.div`
    width:280px;
`

export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`
export const WriterWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align:center;
    margin-top:30px;
`

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`

export const BackTop = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    line-height:60px;
    border:1px solid #ccc;
    right:100px;
    bottom:100px;
    text-align:center;
    cursor:pointer;
    font-size:14px;
`