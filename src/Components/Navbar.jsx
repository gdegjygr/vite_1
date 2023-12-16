import {NavLink} from 'react-router-dom'
import NavbarModule from './NavbarModule.module.css'

const ActiveMenu = ({isActive}) => isActive ? 'active-link' : ''

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="watch_posts" className={ActiveMenu}>Watch posts</NavLink>
                </li>
                <li>
                    <NavLink to="create_posts" className={ActiveMenu}>Create post</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar