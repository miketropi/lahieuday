import { NavLink } from "react-router-dom";

const MENU_LIST = [
  {
    key: 'home',
    name: 'Home',
    href: '/'
  },
  {
    key: 'about',
    name: 'About',
    href: '/about'
  }
]

export default function Menu() {
  return <nav className="nav">
    <ul className="menu">
      {
        MENU_LIST.map(({ name, href, key }) => {
          return <li className="menu-item" key={ key }>
            <NavLink to={ href }>{ name }</NavLink>
          </li>
        })
      }
    </ul>
  </nav>
}