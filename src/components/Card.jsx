import React from 'react'
import './Card.css'
import { Fade } from 'react-awesome-reveal';

export const Card = ({ plant, addToCart }) => {

    const { name, image, description, price, id } = plant;

    return (
        <>
            <Fade direction='top'  className='card' triggerOnce={true}>
                <div>
                    <figure>
                        <img src={image} alt={`plant-${id}`} className='card-image-plant' />
                    </figure>

                    <div className='card-info-plant'>
                        <p className='info-title-plant'>{name}</p>
                        <p className='info-paragraph-plant'>{description}</p>

                        <div className='info-cta-plant'>
                            <p className='cta-price-plant'>$ {price} </p>

                            <button 
                                className='cta-plant-buy'

                                onClick={ () => addToCart(plant) }
                                
                            >
                                Buy
                            </button>

                        </div>

                    </div>

                </div>
            </Fade>
        </>
    )
}
