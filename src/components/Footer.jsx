import React from "react";
import { Navbar} from "react-bootstrap";

function Header() {
  return (
    <Navbar
          variant="flat"
          fixed="bottom"
          className="footer"
          style={{ backgroundColor: "#e8e4e1" }}
        >
          <Navbar.Brand className="ml-auto mr-auto footer">
            <a
              className="footer-link"
              href="https://gowthamparuchuru.github.io/my-portfolio/"
              target="__blank"
            >
              Gowtham
            </a>{" "}
            <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              ©
            </span>{" "}
            {new Date().getFullYear()}
          </Navbar.Brand>
        </Navbar>
  );
}

export default Header;
