import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src='./' alt=''/>
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>Science</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>Technology</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>Cinema</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>Design</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>Food</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className='write'>
            <Link to="/write" className='link'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar