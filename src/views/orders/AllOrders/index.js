import {
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CDataTable,
} from "@coreui/react";
import React, { useState } from "react";

const Orders = () => {
  const usersData = [
    {
      productId: 1834623464357376343,
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      orderDate: "2018/01/01",
      role: "Guest",
      status: "Pending",
    },
    {
      productId: 1834623464357376343,
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      orderDate: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      productId: 2834623464357376343,
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      orderDate: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      productId: 3834623464357376343,
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      orderDate: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      productId: 4834623464357376343,
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      orderDate: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      productId: 5834623464357376343,
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      orderDate: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
  ];

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "productId", _style: { width: "20%" } },
    { key: "productName", _style: { width: "40%" } },
    "orderDate",
    { key: "status", _style: { width: "20%" } },
    // {
    //   key: "show_details",
    //   label: "",
    //   _style: { width: "1%" },
    //   sorter: false,
    //   filter: false,
    // },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  return (
    <CDataTable
      items={usersData}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(index);
                }}
              >
                {details.includes(index) ? "Hide" : "Show"}
              </CButton>
            </td>
          );
        },
        details: (item, index) => {
          return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <h4>{item.username}</h4>
                <p className="text-muted">User since: {item.registered}</p>
                <CButton size="sm" color="info">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          );
        },
      }}
    />
  );
};

export default Orders;
