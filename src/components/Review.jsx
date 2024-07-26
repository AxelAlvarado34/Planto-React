import { Fade } from 'react-awesome-reveal';
import './Review.css'

export const Review = ({ review }) => {

    const { name, image, text } = review;

    return (
        <Fade className='review-card' direction='up' triggerOnce={true}>
            <div>
                <div className="review-profile">
                    <img src={image} alt="profile" className='profile-image' />

                    <div className="profile-text">
                        <p className='profile-name'>{name}</p>
                        <img src="/images/stars.png" alt="stars" />
                    </div>
                </div>

                <p className="review-text">
                    {text}
                </p>
            </div>
        </Fade>
    )
}
