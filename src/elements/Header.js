import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar navibar-light bg-ligh'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>MyMoney</Link>
            </div>
        </nav>
    )
}

export default Header