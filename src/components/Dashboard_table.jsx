import React, { useState } from "react";
import "../Styles/Dashboard_table.css";
import Dropdown from "react-bootstrap/Dropdown";
import * as XLSX from "xlsx";

function Dashboard_table(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(props.sending_data);
  const [activeHeader, setActiveHeader] = useState(null);

  const tabContents = [
    <table>
      <thead>
        <tr>
          <th
            onClick={() => handleHeaderClick(0)}
            className={activeHeader === 0 ? "active" : ""}
          >
            Order ID
          </th>
          <th
            onClick={() => handleHeaderClick(1)}
            className={activeHeader === 1 ? "active" : ""}
          >
            Date & Time
          </th>
          <th
            onClick={() => handleHeaderClick(2)}
            className={activeHeader === 2 ? "active" : ""}
          >
            Retailors
          </th>
          <th
            onClick={() => handleHeaderClick(3)}
            className={activeHeader === 3 ? "active" : ""}
          >
            Payer ID
          </th>
          <th
            onClick={() => handleHeaderClick(4)}
            className={activeHeader === 4 ? "active" : ""}
          >
            Stockist
          </th>
          <th
            onClick={() => handleHeaderClick(5)}
            className={activeHeader === 5 ? "active" : ""}
          >
            Area
          </th>
          <th
            onClick={() => handleHeaderClick(6)}
            className={activeHeader === 6 ? "active" : ""}
          >
            Group
          </th>
          <th
            onClick={() => handleHeaderClick(7)}
            className={activeHeader === 7 ? "active" : ""}
          >
            Order By
          </th>
          <th
            onClick={() => handleHeaderClick(8)}
            className={activeHeader === 8 ? "active" : ""}
          >
            Order Status
          </th>
          <th
            onClick={() => handleHeaderClick(9)}
            className={activeHeader === 9 ? "active" : ""}
          >
            Qty
          </th>
          <th
            onClick={() => handleHeaderClick(10)}
            className={activeHeader === 10 ? "active" : ""}
          >
            Location
          </th>
          <th
            onClick={() => handleHeaderClick(11)}
            className={activeHeader === 11 ? "active" : ""}
          >
            Print/View
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((val, id) => {
          return (
            <tr key={id}>
              <td>{val.orderId}</td>
              <td>{val.order_at}</td>
              <td>{val.r_info.r_name}</td>
              <td>{val.r_info.payerId}</td>
              <td>{val.r_info.s_name}</td>
              <td>{val.r_info.area}</td>
              <td>{val.r_info.salesgroup}</td>
              <td>{val.order_by.name}</td>
              <td>{val.status}</td>
              <td>{Number(val.items[0].qty) + Number(val.items[1].qty)}</td>
              <td>
                {val.location.lattitude}
                <br /> {val.location.logitude}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>,
    "Content for No Order",
    <table>
      <thead>
        <tr>
          <th
            onClick={() => handleHeaderClick(0)}
            className={activeHeader === 0 ? "active" : ""}
          >
            Order ID
          </th>
          <th
            onClick={() => handleHeaderClick(1)}
            className={activeHeader === 1 ? "active" : ""}
          >
            Date & Time
          </th>
          <th
            onClick={() => handleHeaderClick(2)}
            className={activeHeader === 2 ? "active" : ""}
          >
            Retailors
          </th>
          <th
            onClick={() => handleHeaderClick(3)}
            className={activeHeader === 3 ? "active" : ""}
          >
            Payer ID
          </th>
          <th
            onClick={() => handleHeaderClick(4)}
            className={activeHeader === 4 ? "active" : ""}
          >
            Stockist
          </th>
          <th
            onClick={() => handleHeaderClick(5)}
            className={activeHeader === 5 ? "active" : ""}
          >
            Area
          </th>
          <th
            onClick={() => handleHeaderClick(6)}
            className={activeHeader === 6 ? "active" : ""}
          >
            Group
          </th>
          <th
            onClick={() => handleHeaderClick(7)}
            className={activeHeader === 7 ? "active" : ""}
          >
            Order By
          </th>
          <th
            onClick={() => handleHeaderClick(8)}
            className={activeHeader === 8 ? "active" : ""}
          >
            Order Status
          </th>
          <th
            onClick={() => handleHeaderClick(9)}
            className={activeHeader === 9 ? "active" : ""}
          >
            Qty
          </th>
          <th
            onClick={() => handleHeaderClick(10)}
            className={activeHeader === 10 ? "active" : ""}
          >
            Location
          </th>
          <th
            onClick={() => handleHeaderClick(11)}
            className={activeHeader === 11 ? "active" : ""}
          >
            Print/View
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((val, id) => {
          if (val.status.toLowerCase() === "cancel") {
            // Check if status is "Cancelled"
            return (
              <tr key={id}>
                <td>{val.orderId}</td>
                <td>{val.order_at}</td>
                <td>{val.r_info.r_name}</td>
                <td>{val.r_info.payerId}</td>
                <td>{val.r_info.s_name}</td>
                <td>{val.r_info.area}</td>
                <td>{val.r_info.salesgroup}</td>
                <td>{val.order_by.name}</td>
                <td>{val.status}</td>
                <td>{Number(val.items[0].qty) + Number(val.items[1].qty)}</td>
                <td>
                  {val.location.lattitude}
                  <br /> {val.location.logitude}
                </td>
              </tr>
            );
          } else {
            return null; // Skip rendering if status is not "Cancelled"
          }
        })}
      </tbody>
    </table>,
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleSearch = (key) => {
    const filtered = props.sending_data.filter((item) => {
      if (key.includes(".")) {
        const keys = key.split(".");
        let nestedValue = item;
        for (const k of keys) {
          nestedValue = nestedValue[k];
        }
        return nestedValue
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      } else {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
    });
    setFilteredData(filtered);
  };
  const handleExport = () => {
    let dataToExport = filteredData;
    if (activeTab === 2) {
      // Assuming "Cancel" tab has index 2
      dataToExport = filteredData.filter(
        (item) => item.status.toLowerCase() === "cancel"
      );
    }

    const formattedData = dataToExport.map((item) => ({
      "Order ID": item.orderId,
      "Date & Time": item.order_at,
      Retailors: item.r_info.r_name,
      "Payer ID": item.r_info.payerId,
      Stockist: item.r_info.s_name,
      Area: item.r_info.area,
      Group: item.r_info.salesgroup,
      "Order By": item.order_by.name,
      "Order Status": item.status,
      Qty: Number(item.items[0].qty) + Number(item.items[1].qty),
      Location: `${item.location.lattitude}, ${item.location.logitude}`,
      "Print/View": "", // You can add the appropriate value here if needed
    }));

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "table_data.xlsx");
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase(); // Convert input value to lowercase
    setSearchQuery(inputValue);
    const filtered = props.sending_data.filter((item) => {
      return Object.values(item).some((value) => {
        // Check every value in the item
        return String(value).toLowerCase().includes(inputValue); // Check if the value includes the input query
      });
    });
    setFilteredData(filtered);
  };

  const handleHeaderClick = (index) => {
    setActiveHeader(index);
    // Trigger search based on the clicked header
    switch (index) {
      case 0:
        handleSearch("orderId");
        break;
      case 1:
        handleSearch("order_at");
        break;
      case 2:
        handleSearch("r_info.r_name");
        break;
      case 3:
        handleSearch("r_info.payerId");
        break;
      case 4:
        handleSearch("r_info.s_name");
        break;
      case 5:
        handleSearch("r_info.area");
        break;
      case 6:
        handleSearch("r_info.salesgroup");
        break;
      case 7:
        handleSearch("order_by.name");
        break;
      case 8:
        handleSearch("status");
        break;
      default:
        break;
    }
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
                  <Dropdown.Item href="#/action-1">District</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Order By</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Payer</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </button>
            <button type="button" className="clr " onClick={handleExport}>
              Export
            </button>
            <input type="date" className="clr" />
            <input
              type="search"
              className="clr"
              placeholder="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="Tabs_content">{tabContents[activeTab]}</div>
      </div>
    </>
  );
}

export default Dashboard_table;
