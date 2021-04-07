import {
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CDataTable,
} from "@coreui/react";
import React, { useState } from "react";

const AllProducts = () => {
  const usersData = [
    {
      productId: "87243657348348656467",
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      stock: "In Stock",
      price: 435,
      quantity: 12,
    },
    {
      productId: "8724365733345348348467",
      productName: "Asus Laptop Gadget Product Title Will be here One 01",
      stock: "In Stock",
      price: 689,
      quantity: 7,
    },
    {
      productId: "87243657348348656467",
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      stock: "In Stock",
      price: 435,
      quantity: 12,
    },
    {
      productId: "8724365733345348348467",
      productName: "Asus Laptop Gadget Product Title Will be here One 01",
      stock: "Out Of Stock",
      price: 689,
      quantity: 7,
    },
    {
      productId: "87243657348348656467",
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      stock: "In Stock",
      price: 435,
      quantity: 12,
    },
    {
      productId: "8724365733345348348467",
      productName: "Asus Laptop Gadget Product Title Will be here One 01",
      stock: "Out Of Stock",
      price: 689,
      quantity: 7,
    },
    {
      productId: "87243657348348656467",
      productName: "Test KingCommerce Gadget Product Title Will be here One 01",
      stock: "In Stock",
      price: 435,
      quantity: 12,
    },
    {
      productId: "8724365733345348348467",
      productName: "Asus Laptop Gadget Product Title Will be here One 01",
      stock: "Out Of Stock",
      price: 689,
      quantity: 7,
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
    { key: "productName", _style: { width: "30%" } },
    { key: "stock", _style: { width: "10%" } },
    { key: "price", _style: { width: "10%" } },
    { key: "quantity", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
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
  const stock = (stock) => {
    switch (stock) {
      case "In Stock":
        return "success";
      case "Out Of Stock":
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
        stock: (item) => (
          <td>
            <CBadge color={stock(item.stock)}>{item.stock}</CBadge>
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

export default AllProducts;
