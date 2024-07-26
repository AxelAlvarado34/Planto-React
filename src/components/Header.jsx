import { Fade } from 'react-awesome-reveal';
import './Header.css'
import { useState } from 'react'
import Banner from './Banner';
import { ItemCart } from './ItemCart';
import { Link } from 'react-scroll';
import { formatCurrency } from '../helpers';

const Header = ({ cart, setCart, incrementAmount, decrementAmount, deleteItem, totalCart }) => {

    const [menu, setMenu] = useState(false);

    const [scroll, setScroll] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    const [cartMenu, setCartMenu] = useState(false);

    const total = totalCart();

    return (
        <div className='header' id='/'>
            <nav className={`nav ${scroll ? 'scroll' : ''}`}>


                <div className="nav_icon">
                    <figure><img src="/icons/leaf.ico" className="image_icon" alt="Image Icon" /></figure>
                    <p className="title-icon">Planto</p>
                </div>

                <div className={`nav_links ${menu ? 'open' : ''}`}>
                    <ul className={`nav_list`}>
                        <li className='nav_item'>
                            <Link className='nav_link' to="/" delay={0} offset={-100} spy={true} smooth={true} duration={500} >Home</Link>
                        </li>
                        <li className='nav_item'>
                            <Link className='nav_link' to="products" spy={true} offset={-150} smooth={true} duration={500}>Products</Link>
                        </li>
                        <li className='nav_item'>
                            <Link className='nav_link' to="reviews" spy={true} offset={-200} smooth={true} duration={500}>Reviews</Link>
                        </li>
                        <li className='nav_item'>
                            <Link className='nav_link' to="footer" spy={true} offset={-100} smooth={true} duration={500}>Contact</Link>
                        </li>

                        <button className={`btn-close ${menu ? 'open' : ''}`} onClick={() => setMenu(!menu)}>
                            <img src="/images/close.svg" alt="close-img" className='close-img' />
                        </button>
                    </ul>
                </div>

                <div className='nav_cart'>
                    <img
                        onClick={() => { setCartMenu(!cartMenu) }}
                        src="/images/cart.png" alt="cart" className='cart-img'
                    />
                    <p className='cart-amount-items'>{cart.length}</p>
                    <button onClick={() => setMenu(!menu)} className={`btn-menu`}>
                        <img src="/images/menu.svg" alt="cart" className='menu-img' />
                    </button>
                </div>

                <div className={`cart ${cartMenu ? "open-cart" : ""}`}>
                    <ul className="cart_titles">
                        <li className='title-product'>Products</li>
                    </ul>

                    <div className='cart-list'>
                        {
                            cart.map((item) => {
                                return <ItemCart
                                    key={item.id}
                                    item={item}
                                    incrementAmount={incrementAmount}
                                    decrementAmount={decrementAmount}
                                    deleteItem={deleteItem}
                                />
                            })
                        }
                    </div>

                    <div className='cart-calculate'>
                        <p className='calculate-number'>Total : $<span className='total-money'>{formatCurrency(total)}</span></p>
                    </div>

                    <button className='btn-clean' onClick={() => setCart([])}>
                        Clean
                    </button>
                </div>

            </nav>

            <div className="header-info">
                <Fade direction='down' duration={1700} triggerOnce={true}>
                    <h1 className='info-title'>Breath Natureal</h1>
                </Fade>

                <Fade direction='down' duration={1700} delay={1000} triggerOnce={true}>
                    <p className='info-paragraph'>
                        Explore our meticulously curated selection of plants to bring life and vibrancy into your home.
                        Find the perfect green addition for every corner of your space.
                        Discover the natural beauty that will transform your environment today!
                    </p>
                </Fade>

                <Fade direction='down' duration={1500} delay={1100} triggerOnce={true}>
                    <div className='info-btns'>
                        <Link to="banners" delay={0} offset={350} spy={true} smooth={true} duration={500} className='btn-explorer'>
                            <p className='explorer-paragraph'>Explore</p>
                        </Link>

                        <a href="https://www.youtube.com/watch?v=sVPYIRF9RCQ" target='_blank' className='btn-play'>
                            <img src="/images/play.png" alt="pla-img" className='play-image' />
                            <p className='play-paragraph'>Live Demo...</p>
                        </a>
                    </div>
                </Fade>
            </div>

            <Fade direction='top' duration={1700} delay={1000} triggerOnce={true}>
                <div className='card-plant'>
                    <img src="/images/plant-7.png" alt="plant-banner" className='card-img' />

                    <div className="card-info">
                        <p className='card-title'>Trendy House Plant</p>
                        <p className='card-subTitle'>Diefen plant</p>
                        <Link className='card-btn' to="products" spy={true} offset={-150} smooth={true} duration={500}>Buy Now</Link>
                    </div>

                </div>
            </Fade>

            <Fade direction='top' duration={1500} delay={900} triggerOnce={true}>

                <div className='card-review'>
                    <div className='card-info'>
                        <img src="/images/user-1.png" alt="user-icon" />

                        <div className="user-info">
                            <p className='user-name'>alena Patel</p>
                            <img src="/images/stars.png" alt="stars" className='img-stars' />
                        </div>

                    </div>
                    <div className="card-text">
                        <p className='card-paragraph'>
                            Blossom Nursery is a green haven in the city. Its extensive selection of plants is impressive,
                            and the staff is friendly and knowledgeable. A perfect spot for all nature lovers! #Blossom #Nursery
                        </p>
                    </div>
                </div>
            </Fade>

            <div className="banner-container-header" id='banners'>
                <Banner />
            </div>

        </div>
    )
}


export default Header
