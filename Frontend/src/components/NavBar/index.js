import React from 'react'
import './index.css'
import {FiHome, FiUser} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const NavBar = () => {

return (

<div className="navbar">

<Link to ="/" class="navbarButton"><FiHome /><br/>
Home
</Link>

<Link to="/registration" class="navbarButton"><AiOutlinePlus/><br />  Add Book
</Link>
<Link to='/' class="navbarButton"><FiUser /><br /> Profile
</Link>
</div>
)
}

export default NavBar