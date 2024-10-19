import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <>
            <div className='container'>
                <div className='footer'>

                    <div>
                        <h2>  Address</h2>
                        <p>
                            302 303, BSquare II,
                            Near Doubletree Hotel,
                            Ambli Road,
                            Ahmedabad - 380058,
                            Gujarat, India.
                        </p>

                        <h2> Contact Number</h2>
                        <p>02717 412424</p>
                        <h2>Email</h2>
                        <p>info@therealestateconnect.com</p>
                    </div>
                    <div>
                        <h2>Sitemap</h2>

                        <ul className='footer-link'>
                            <li>Projects</li>
                            <li>Newsletters</li>
                            <li>Calculators</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>






                    </div>
                    <div>
                        <h2> Knowledge Center</h2>

                        <ul className='footer-link'>
                            <li> Buyers</li>
                            <li>Sellers</li>
                            <li>  Rental</li>
                            <li>Investors</li>
                            <li>Estate Agents</li>
                            <li>Home Loans</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Services</h2>
                        <ul className='footer-link'>
                            <li> Buy</li>
                            <li>Sell</li>
                            <li> Rent</li>
                            <li>Invest</li>
                        </ul>




                        <h2>Video Blogs</h2>
                        <ul className='footer-link'>
                            <li> Informative Videos</li>
                            <li>  TREC Podcasts</li>
                        </ul>
                    </div>
                </div>
                <hr />

                <h3>© 2024 TREC. ALL RIGHTS RESERVED.
                </h3>
            </div>


        </>
    )
}
