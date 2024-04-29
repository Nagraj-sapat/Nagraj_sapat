import React, { useState } from "react";
import "../Styles/Dashboard_table.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function Dashboard_table() {
  const [activeTab, setActiveTab] = useState(0);

  const tabContents = [
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Payer ID</th>
          <th>Stocklist</th>
          <th>Area</th>
          <th>Group</th>
          <th>Order By</th>
          <th>Order Status</th>
          <th>Qty</th>
          <th>Location</th>
          <th>Print/View</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>,
    "Content for No Order",
    "Content for Cancel",
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div>
        <div className="Dashboard_table_divider">
          <div className="tabs_section">
            {tabContents.map((content, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className="Tabs_style"
                style={{
                  fontWeight: activeTab === index ? "bold" : "normal",
                  borderBottom: activeTab === index ? "3px solid #eb0000" : "",
                }}
              >
                {index === 0 ? "Order" : index === 1 ? "No Order" : "Cancel"}
              </button>
            ))}
          </div>
          <div className="buttons_section">
            <button className="dropDown_style">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Group By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Order</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Order</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Orders</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </button>
            <button type="button" className="clr ">
              Export
            </button>
            <input type="date" className="clr" />
            <input type="search" className="clr" placeholder="Search" />
          </div>
        </div>
        <div className="Tabs_content">{tabContents[activeTab]}</div>
      </div>
    </>
  );
}

export default Dashboard_table;
