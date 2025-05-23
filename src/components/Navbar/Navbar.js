import { Link, useLocation } from 'react-router-dom'
import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const location = useLocation()

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {/* Show Home link on all pages except homepage */}
        {location.pathname !== '/Portfolio' && (
          <li className='nav__list-item'>
            <Link to='/portfolio' onClick={toggleNavList} className='link link--nav'>
              Home
            </Link>
          </li>
        )}
        <li className='nav__list-item'>
          <Link to='/about' onClick={toggleNavList} className='link link--nav'>
            About
          </Link>
        </li>
        {projects.length ? (
          <li className='nav__list-item'>
            <Link
              to='/projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </Link>
          </li>
        ) : null}
        {skills.length ? (
          <li className='nav__list-item'>
            <Link
              to='/skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </Link>
          </li>
        ) : null}
        {contact.email ? (
          <li className='nav__list-item'>
            <Link
              to='/contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </Link>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
