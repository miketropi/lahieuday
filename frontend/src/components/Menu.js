import { NavLink } from "react-router-dom";

const MENU_LIST = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  }
]

export default function Menu() {
  return <nav className="nav">
    <ul className="menu">
      {
        MENU_LIST.map(({ name, href }) => {
          return <li className="menu-item">
            <NavLink to={ href }>{ name }</NavLink>
          </li>
        })
      }
    </ul>
  </nav>
}