// rafce
import React ,{useState} from 'react'
import './Header.css'
import Logo from '../../../assets/logo.png'
import Bars from '../../../assets/bars.png'
import { Link } from 'react-scroll'


const Header = () => {
  const mobile=window.innerWidth <= 786 ?true:false;
  const[menuOpened,setMenuOpended]= useState(false)
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo"></img>
      {menuOpened === false && mobile === true ? (
        <div className="bars" onClick={() => setMenuOpended(true)}>
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpended(false)}>
            <Link
              onClick={() => setMenuOpended(false)}
              activeClass='active'
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpended(false)}>
            <Link
              onClick={() => setMenuOpended(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpended(false)}>
            <Link
              onClick={() => setMenuOpended(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li onClick={() => setMenuOpended(false)}>
            <Link
              onClick={() => setMenuOpended(false)}
              to="plan"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpended(false)}
              to="Testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header