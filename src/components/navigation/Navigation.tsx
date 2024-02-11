import { NavLink } from "react-router-dom";
import { Nav } from "../../styles/Navigation.styles";
import { routes } from "../../assets/routs";
import Image from "../../assets/warehouse.png";
import { useState } from "react";
import { useNavigation } from "./Navigation.logic";

export const Navigation = () => {
  const navClickHandler = () => {
    setShow((prevState) => !prevState);
  };

  const { logOutHandler } = useNavigation();
  const [show, setShow] = useState(false);

  return (
    <Nav className={"main-nav" + (show ? " show" : "")}>
      <NavLink to={routes.home} className={"logo"}>
        <img src={Image} alt="Warehouse Logo" />
      </NavLink>
      <ul className={"nav-links"}>
        <NavLink className={"nav-link"} to={routes.home}>
          Home
        </NavLink>
        <NavLink className={"nav-link"} to={routes.client}>
          Clients
        </NavLink>
        <NavLink className={"nav-link"} to={routes.warehouse}>
          Warehouses
        </NavLink>
        <NavLink className={"nav-link"} to={routes.product}>
          Products
        </NavLink>
        <NavLink className={"nav-link"} to={routes.order}>
          Orders
        </NavLink>
        <div className={"dropdown"}>
          <button className={"dropbtn"}>Username</button>
          <div className={"dropdown-content"}>
            <div>Role</div>
            <div style={{ cursor: "pointer" }} onClick={logOutHandler}>
              Log Out
            </div>
          </div>
        </div>
      </ul>
      <div className={"burger"} onClick={navClickHandler}>
        <div className={"line line1"}></div>
        <div className={"line line2"}></div>
        <div className={"line line3"}></div>
      </div>
    </Nav>
  );
};
