import './Card.css'



const Card = (props) => {
  return(
    <div className="card">
      <div className="photo">
          <img className='photo' src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="" />
      </div>
      <div className='info'>
        <h1 className='infoTitle'>{props.title}</h1>
        <p className='infoSubtitle'></p>
      </div>
    </div>
  )
}

export default Card