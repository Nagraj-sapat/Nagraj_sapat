import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard_cards from "./components/Dashboard_cards";
import Dashboard_table from "./components/Dashboard_table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";

function App() {
  // API Calling start

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("http://192.168.0.26:5000/order_at/06:05:2024")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading)
  //   return (
  //     <div className="spinner_container">
  //       <Spinner animation="border" variant="info" className="mySpinner" />
  //     </div>
  //   );
  // if (error)
  //   return (
  //     <div className="error_container">
  //       <div>{error.message}...</div>
  //     </div>
  //   );

  // console.log(data);

  // API Calling end

  let data = {
    code: 200,
    data: [
      {
        items: [
          {
            cash_disc: "0",
            discount: "0",
            free: "0",
            itemId: "LRD250P",
            points: "5",
            price: "1.0",
            qty: "20",
            tax: "5",
          },
          {
            cash_disc: "0",
            discount: "0",
            free: "0",
            itemId: "LRL250P",
            points: "5",
            price: "1.0",
            qty: "45",
            tax: "5",
          },
        ],
        location: {
          lattitude: "72.8207042",
          logitude: "19.0083918",
        },
        onCart: "30:04:2024 10:12",
        orderId: "74W1WJSE-1043",
        order_at: "30:04:2024 10:12",
        order_by: {
          desig: "IT",
          id: "45",
          name: "Madhusudan",
        },
        r_info: {
          area: "new area",
          district: "M.P.",
          payerId: "SUS003",
          r_name: "Sushmeet",
          rid: "test123",
          s_name: "SUSHMEET ENTERPRISES, RAIPUR",
          salesgroup: "MP",
        },
        rid: "test123",
        status: "confirm",
        status_logs: [
          {
            dateTime: "30:04:2024 10:12",
            level: "1",
            status: "Confirm",
            status_key: "confirm",
          },
        ],
      },
      {
        items: [
          {
            cash_disc: "0",
            discount: "0",
            free: "0",
            itemId: "LRD250P",
            points: "5",
            price: "1.0",
            qty: "10",
            tax: "5",
          },
          {
            cash_disc: "0",
            discount: "0",
            free: "0",
            itemId: "LRE1KGJ",
            points: "5",
            price: "1.0",
            qty: "20",
            tax: "5",
          },
        ],
        location: {
          lattitude: "72.8207042",
          logitude: "19.0083918",
        },
        onCart: "30:04:2024 09:37",
        orderId: "YXJI5GFZ-6372",
        order_at: "30:04:2024 09:37",
        order_by: {
          desig: "IT",
          id: "45",
          name: "Madhusudan",
        },
        r_info: {
          area: "new area",
          district: "M.P.",
          payerId: "SUS003",
          r_name: "Sushmeet",
          rid: "test123",
          s_name: "SUSHMEET ENTERPRISES, RAIPUR",
          salesgroup: "MP",
        },
        rid: "test123",
        status: "cancel",
        status_logs: [
          {
            dateTime: "30:04:2024 09:38",
            level: "1",
            status: "Confirm",
            status_key: "confirm",
          },
          {
            dateTime: "30:04:2024 09:38",
            level: "2",
            status: "Approved",
            status_key: "approved",
          },
          {
            dateTime: "30:04:2024 09:38",
            level: "2",
            status: "In Progress",
            status_key: "inProgress",
          },
          {
            dateTime: "30:04:2024 09:38",
            level: "6",
            status: "Cancelled",
            status_key: "cancel",
          },
        ],
      },
    ],
    message: "All orders retrieved",
    payerId_counts: 1,
    total_order_count: 2,
    total_quantity: 95,
    total_rid_counts: 1,
  };

  // console.log(data.total_order_count);
  return (
    <>
      <section className="dashboard_table">
        <Dashboard_cards
          Card_text="Today's Orders"
          Total={data.total_order_count}
          Card_icon={<FontAwesomeIcon icon={faUsers} />}
          Icon_bg_clr="bg-success"
          ClassName="Card_1_style"
        />
        <Dashboard_cards
          Card_text="Ordered Retailors"
          Total={data.total_rid_counts}
          Card_icon={<FontAwesomeIcon icon={faHome} />}
          Icon_bg_clr="bg-primary"
          ClassName="Card_2_style"
        />
        <Dashboard_cards
          Card_text="Ordered Payers"
          Total={data.payerId_counts}
          Card_icon={<FontAwesomeIcon icon={faEye} />}
          Icon_bg_clr="bg-warning"
          ClassName="Card_3_style"
        />
        <Dashboard_cards
          Card_text="No Orders"
          Total={data.no_order_count}
          Card_icon={<FontAwesomeIcon icon={faTimes} />}
          Icon_bg_clr="bg-info"
          ClassName="Card_4_style"
        />
      </section>
      <section className="Dashboard_table_data">
        <Dashboard_table sending_data={data.data} />
      </section>
    </>
  );
}

export default App;
