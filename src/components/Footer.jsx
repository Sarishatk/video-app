import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column flex-wrap' style={{ width: '100%', height: '300px' ,marginLeft:"30px"}}>
            <div className="footer-content d-flex  justify-content-evenly   w-100">
                <div className="website " style={{ width: '400px' }}>
                    <h4><i className="fa-solid fa-cloud-arrow-up overflow-hidden"></i>{" "}Media Player</h4>
                    <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                    <h6>Code licensed MIT, docs CC BY 3.0.</h6>
                    <p>Currently v5.3.3.</p>
                </div>

                <div className="link d-flex flex-column">
                    <h4>Links</h4>
                    <Link to={'/'} className='' style={{ textDecoration: 'none', color: 'white' }} >Landing page</Link>
                    <Link to={'/Home'} className='' style={{ textDecoration: 'none', color: 'white' }} >Home page</Link>
                    <Link to={'/Watch-history'} className='' style={{ textDecoration: 'none', color: 'white' }} >Watch-history</Link>

                </div>

                <div className="guides d-flex flex-column">
                <h4>guides</h4>
                    <Link to={'https://getbootstrap.com/'} className='' style={{ textDecoration: 'none', color: 'white' }} >React</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} className='' style={{ textDecoration: 'none', color: 'white' }} >React Bootstrap</Link>
                    <Link to={'https://www.npmjs.com/package/react-router-dom'} className='' style={{ textDecoration: 'none', color: 'white' }} >Routing</Link>

                </div>
                <div className="contacts d-flex flex-column flex-wrap">
                <h4>Contact Us</h4>
                <div className='d-flex'>
                    <input className='form-control' type="email" placeholder='Enter your email'/>
                 <div className='btn btn-primary ms-3'><i className="fa-duotone fa-solid fa-arrow-right"></i></div>
                </div>
                <div className='icons mt-3 d-flex justify-content-evenly fs-4'>
                    <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-brands fa-twitter overflow-hidden"></i></Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-brands fa-linkedin overflow-hidden"></i></Link>
                    <Link to={'https://www.npmjs.com/package/react-router-dom'}  style={{ textDecoration: 'none', color: 'white' }} ><i class="fa-brands fa-github overflow-hidden"></i></Link>
                    <Link to={'https://www.npmjs.com/package/react-router-dom'}  style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-brands fa-facebook overflow-hidden"></i></Link>

            </div>
                </div>
            </div>
            <p>Copyright © 2024 Media Player. Built with Docusaurus</p>
        </div>
    )
}

export default Footer
