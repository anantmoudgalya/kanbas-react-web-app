import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/theme.css";
import "font-awesome/css/font-awesome.css";

function KanbasNavigation() {
  const baseUrl = "#/Kanbas";
  const links = [
    {
      name: "Account",
      url: `${baseUrl}/Account`,
      iconClass: "fa fa-user kanbas-gray",
    },
    {
      name: "Dashboard",
      url: `${baseUrl}/Dashboard`,
      iconClass: "fa-solid fa-gauge-high kanbas-red",
    },
    {
      name: "Courses",
      url: `${baseUrl}/Courses`,
      iconClass: "fa fa-book kanbas-red",
    },
    {
      name: "Calendar",
      url: `${baseUrl}/Calendar`,
      iconClass: "fa fa-calendar kanbas-red",
    },
    {
      name: "Inbox",
      url: `${baseUrl}/Inbox`,
      iconClass: "fa fa-envelope kanbas-red",
    },
    {
      name: "History",
      url: `${baseUrl}/History`,
      iconClass: "fa fa-hourglass kanbas-red",
    },
    {
      name: "Studio",
      url: `${baseUrl}/Studio`,
      iconClass: "fa fa-tv kanbas-red",
    },
    {
      name: "Commons",
      url: `${baseUrl}/Commons`,
      iconClass: "fa fa-tree kanbas-red",
    },
    {
      name: "Help",
      url: `${baseUrl}/Help`,
      iconClass: "fa fa-question kanbas-red",
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="list-group kanbas-sidebar kanbas-column">
      <a
        className={`kanbas-no-underline kanbas-sidebar-unselected
          kanbas-icon-padding`}
      >
        <img style={{ width: "75%" }} src="/images/NortheasternLogo.png" />
      </a>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className={`kanbas-no-underline ${
            pathname.includes(link.name)
              ? "kanbas-sidebar-selected"
              : "kanbas-sidebar-unselected"
          } kanbas-icon-padding`}
        >
          <i className={link.iconClass}></i>
          <br />
          <div className="kanbas-sidebar-text">{link.name}</div>
        </a>
      ))}
    </div>
  );
}
export default KanbasNavigation;
