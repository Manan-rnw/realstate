import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <ul className='main'>
            <li>
                <Link className='link' to='/'>HOME</Link>
            </li>

            <li>

                <Link className='link' to='/about'>ABOUT </Link>
            </li>

            <li>
                <Link className='link' to='/contact'>CONTACT</Link>

            </li>
        </ul>
    )
}
