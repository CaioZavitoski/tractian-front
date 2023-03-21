import { useState } from "react";
import "./Navbar.css";
import { BiAlignRight, BiX } from "react-icons/bi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const executeScroll = (query) => {
    const section = document.querySelector(query);
    section.scrollIntoViewIfNeeded();
  };

  return (
    <div className="navbar">
      <div className="navbar__logo-container">
        <span className="navbar__logo-name">Track King</span>
      </div>
      <div className="navbar__main">
        <ul className="navbar__links">
          <li className="navbar__link-wrapper">
            <a onClick={() => executeScroll("#home")} className="navbar__link">
              Home
            </a>
          </li>
          <li className="navbar__link-wrapper">
            <a onClick={() => executeScroll("#about")} className="navbar__link">
              About
            </a>
          </li>
          <li className="navbar__link-wrapper">
            <a
              className="navbar__link"
              onClick={() => executeScroll("#clients")}
            >
              Clients
            </a>
          </li>
          <li className="navbar__link-wrapper">
            <a
              className="navbar__link"
              onClick={() => executeScroll("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__mobile">
        {!toggleMenu ? (
          <BiAlignRight
            cursor="pointer"
            className="navbar__mobile-icon"
            onClick={() => setToggleMenu(!toggleMenu)}
            size={42}
          />
        ) : (
          <BiX
            cursor="pointer"
            className="navbar__mobile-icon"
            onClick={() => setToggleMenu(!toggleMenu)}
            size={42}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="navbar__mobile_menu">
          <ul className="navbar__mobile_links">
            <li className="navbar__mobile_link-wrapper">
              <a
                onClick={() => {
                  executeScroll("#home");
                  setToggleMenu(false);
                }}
                className="navbar__mobile_link"
              >
                Home
              </a>
            </li>
            <li className="navbar__mobile_link-wrapper">
              <a
                onClick={() => {
                  executeScroll("#about");
                  setToggleMenu(false);
                }}
                className="navbar__mobile_link"
              >
                About
              </a>
            </li>
            <li className="navbar__mobile_link-wrapper">
              <a
                className="navbar__mobile_link"
                onClick={() => {
                  executeScroll("#clients");
                  setToggleMenu(false);
                }}
              >
                Clients
              </a>
            </li>
            <li className="navbar__mobile_link-wrapper">
              <a
                className="navbar__mobile_link"
                onClick={() => {
                  executeScroll("#contact");
                  setToggleMenu(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
