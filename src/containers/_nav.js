import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Products",
    route: "/products",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Products",
        to: "/products/all-products",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Products",
        to: "/products/add-products",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Edit Products",
        to: "/products/edit-products",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Orders",
    route: "/orders",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Orders",
        to: "/orders/all-orders",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Users",
    route: "/users",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Users",
        to: "/users/all-users",
      },
    ],
  },
];

export default _nav;
