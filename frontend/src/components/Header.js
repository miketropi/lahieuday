import Logo from "./Logo";
import Menu from "./Menu";

export default function Headers() {
  return <header id="HEADER_MAIN" className="header">
    <div className="site-container">
      <div className="header--inner">
        <Logo />
        <Menu />
      </div>
    </div>
  </header>
}