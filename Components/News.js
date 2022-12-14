import React,{useState,useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsitem from './Newsitem';


const News = ({category}) => {
    const [news, setNews] = useState([]);
   
    useEffect(() => {    
        setNews([]);
        fetchNews(); 
    },[category]);
    
    const fetchNews=async()=>{
      try {      
        let url=`https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&language=en&apiKey=356662475a6648d09a7bf40a94e9619f`;
         const response= await fetch(url);
         const newsRes = await response.json();
         setNews(newsRes.articles);
      } catch (e) {
        console.log(e);
      }
    }
  
   
   
  return (
     
      <InfiniteScroll dataLength={news.length} hasMore={true}>
        <div className='news'>
            { news.length==0 ? <h2 style={{textAlign:"center"}}>Loading News...</h2> : news.map((element,index)=>{
              if(element.description !=null || element.image !=null) return <Newsitem key={index} title={element.name} image={element.urlToImage} description={element.description} link={element.url} content={element.content} time={element.publishedAt} author={element.author} website={element.source.name}></Newsitem>
            })}
        
        </div>
      </InfiniteScroll>
      
  )
}   

export default News
