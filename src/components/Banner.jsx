import { Fade } from 'react-awesome-reveal'
import './Banner.css'
import { Link } from 'react-scroll'

const Banner = () => {
    return (
        <div className='banner-container'>

            <Fade direction='down' duration={1500} triggerOnce={true} className='banner banner-full'>
                <div className='banner'>
                    <figure>
                        <img src="/images/plan-1.png" alt="plant-1" className='banner-img' />
                    </figure>

                    <div className='banner-info'>
                        <p className='info-title'>For Small Decs Ai Plat</p>
                        <p className='info-paragraph'>
                            The For Small Decs Ai Plat is a popular indoor plant known for its lush appearance and easy-care nature.
                            It has small, bright green leaves that give it a fresh and natural look.
                            This plant is perfect for decorating small spaces such as desks or shelves and adds a touch of color and life to any indoor environment.
                        </p>
                        <p className='info-price'>${15}</p>

                        <div className='info-cta'>
                        <Link to="products" spy={true} offset={-150} smooth={true} duration={500} className='info-explorer'>Explore</Link>
                            <button className='info-shop'>
                                <img src="/images/cart.png" alt="cart" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='banner banner-2'>
                    <figure>
                        <img src="/images/plant-5.png" alt="plant-2" className='banner-img-2' />
                    </figure>

                    <div className='banner-info banner-info-2'>
                        <p className='info-title'>For Fresh Decs Ai Plat</p>
                        <p className='info-paragraph'>
                            The For Fresh Decs Ai Plat is a popular indoor plant, prized for its lush appearance and ease of care. With its vibrant green leaves,
                            it adds a fresh and natural touch to any indoor space. Perfect for small areas like desks or shelves,
                            this plant brings a pop of color and vitality to your living or working environment.
                        </p>
                        <p className='info-price'>${18}</p>

                        <div className='info-cta'>
                            <Link to="products" spy={true} offset={-150} smooth={true} duration={500} className='info-explorer'>Explore</Link>
                            <button className='info-shop'>
                                <img src="/images/cart.png" alt="cart" />
                            </button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Banner
