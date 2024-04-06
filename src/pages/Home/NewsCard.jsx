
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function NewsCard({ aNews }) {
    const { title, image_url, details ,_id} = aNews
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image_url}  alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title} </h2>
                {
                details.length >200?
                <p>{details.slice(0,200)} <Link to={`/aNews/${_id}`} className='text-red-600 font-medium ml-3'> Read More</Link> </p>
                : <p>{details}</p>
                } 
                
            </div>
        </div>
    )
}

NewsCard.propTypes = {
    aNews:PropTypes.object
}

export default NewsCard
