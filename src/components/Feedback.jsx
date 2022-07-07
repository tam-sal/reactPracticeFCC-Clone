import '../stylesheets/Feedback.css';

function Feedback({ image, name, country, job, company, feedText }) {

  return (
    <div className="feedback-container">
      <img className="feed-img"
        src={require(`../images/${image}.png`)}
        alt={`feedback of ${name}`}
      />
      <div className="text-container">
        <p className='name-country'> <strong>{name}</strong> in {country}</p>
        <p className='job'>{job} at <strong>{company}</strong></p>
        <p className='feedback-text'>"{feedText}"</p>
      </div>
    </div >
  )
}

export default Feedback