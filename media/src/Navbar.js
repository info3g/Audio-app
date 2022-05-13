import React from 'react'
import { MdHttps } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <Link class="nav-link" to="/">Summary <MdHttps /></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Insights">Insights</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Quotes">Quotes</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Community">Community</Link>
            </li>
            </ul>
        </div>
</nav>
    </div>
  )
}

export default Navbar;
