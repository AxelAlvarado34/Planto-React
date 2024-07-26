import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import './Spinner.css'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { useEmail } from '../hooks/useEmail'

export const Footer = () => {

    const {
        message, setMessage,
        alert,
        success,
        spinner,
        handleSubmit
    } = useEmail();

    return (
        <div className='footer'>
            <div className='footer-info'>
                <div className="footer-logo">
                    <img src="/icons/leaf.ico" alt="leaf" className='footer-img' />
                    <p className='footer-title'>Planto</p>
                </div>

                <div className="footer-text">
                    Planto is your go-to for beautiful, healthy plants. Discover a variety of indoor and outdoor options to beautify your home and garden. Visit us to find your perfect plant!
                </div>

                <div className="footer-social">
                    <a href="https://sv.linkedin.com/" target='_blank' className='footer-link'>
                        <FontAwesomeIcon icon={faLinkedin} className='footer-icon' />
                    </a>

                    <a href="https://github.com/AxelAlvarado34" target='_blank' className='footer-link gitHub'>
                        <FontAwesomeIcon icon={faGithub} className='footer-icon icon-git'/>
                        <p className='github-name'>Axel Alvarado</p>
                    </a>
                </div>
            </div>

            <div className="quick-links">

                <p className='quick-title'>Quick Link’s</p>

                <Link to="/" delay={0} offset={-100} spy={true} smooth={true} duration={500} className='quick-link'>Home</Link>
                <Link to="banners" delay={0} offset={350} spy={true} smooth={true} duration={500} className='quick-link'>Type’s Of plant’s</Link>
                <Link to="footer" delay={0} offset={-100} spy={true} smooth={true} duration={500} className='quick-link'>Contact</Link>
                <Link to="footer" delay={0} offset={-100} spy={true} smooth={true} duration={500} className='quick-link'>Privacy</Link>
            </div>

            <div className="footer-contact">
                <form className='form' onSubmit={handleSubmit}>

                    <p className='form-title'>For Every Update.</p>

                    <input 
                        type="text" 
                        placeholder='Enter Email' 
                        className='form-input' 

                        value={message}
                        onChange={(e)=> setMessage(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        value="Subscribe" 
                        className='form-cta'
                    />
                </form>

                {
                    spinner && <span className="loader"></span>
                }

                {
                    alert && <p className='alert'>The field is requerid</p>
                }

                {
                    success && <p className='alert alert-success'>you have successfully subscribed</p>
                }

            </div>

        </div>
    )
}
