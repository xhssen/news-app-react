
const Newsitem = ({title,image,description,link,time,author,website}) => {


  const date=new Date(time);
  const publishedAt=date.toDateString();  

  return (
    <>
    <div className="card" >
        <img src={image != null ? image: "./imageicon.png"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.substring(0,90).concat("...")}</p>
          <a href={link} className="btn btn-primary" target="_blank">Read More</a>
          <p className='dateinfo' style={{color:"#464646"}}>{publishedAt} by { author==null?"Unknown": author}</p>
        </div>

    </div>
    </>
  )
}

export default Newsitem