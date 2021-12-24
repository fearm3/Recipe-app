import React, { useState } from "react";
import { Nav, Logo, Menu, MenuLink, Hamburger } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Nav>
        <Logo to="/">
          <i>{"SteakHouse"}</i>
          <span>recipe</span>
        </Logo>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu isOpen={isOpen}>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to={{ pathname: "https://github.com/fearm3/Recipe-app" }}>
            GitHub
          </MenuLink>
          <MenuLink to="/login">Logout</MenuLink>
        </Menu>
      </Nav>
    </div>
  );
};

export default Navbar;
