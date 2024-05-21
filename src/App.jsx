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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero based
    let year = date.getFullYear();

    // Add leading zeros to day and month if necessary
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return `${day}:${month}:${year}`;
  }

  let currentDate = new Date();
  let formattedDate = formatDate(currentDate);

  // let url = `http://192.168.0.26:5000/order_at/${formattedDate}`;
  // let url = `http://192.168.0.26:5000/order_at/20:05:2024`;
  let url = `http://192.168.0.26:5000/order`;
  // let url = `http://192.168.0.26:5000/order/2024-05-21`;

  // fetching api

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="spinner_container">
        <Spinner animation="border" variant="info" className="mySpinner" />
      </div>
    );
  if (error)
    return (
      <div className="error_container">
        <div>{error.message}...</div>
      </div>
    );

  // console.log(data);

  // API Calling end

  // console.log(data.total_order_count);

  //   let Data={
  //     "GradeQty": {
  //         "AWT": 25,
  //         "FGT": 15,
  //         "ITD": 80,
  //         "LRD": 117,
  //         "LRE": 70,
  //         "QWT": 25
  //     },
  //     "code": 200,
  //     "data": [
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "12",
  //                     "discount": "2",
  //                     "free": "0",
  //                     "itemId": "FGTJ12",
  //                     "points": "5",
  //                     "price": "90",
  //                     "qty": "15",
  //                     "tax": "5"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 15:25",
  //             "orderId": "EWDUFB3V-5865",
  //             "order_at": "20:05:2024 15:25",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 15:25",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "0",
  //                     "discount": "0",
  //                     "free": "0",
  //                     "itemId": "LRD250P",
  //                     "points": "5",
  //                     "price": "1.0",
  //                     "qty": "45",
  //                     "tax": "5",
  //                     "unit": "Kg"
  //                 },
  //                 {
  //                     "cash_disc": "0",
  //                     "discount": "0",
  //                     "free": "0",
  //                     "itemId": "LRE1KGJ",
  //                     "points": "5",
  //                     "price": "1.0",
  //                     "qty": "10",
  //                     "tax": "5",
  //                     "unit": "Kg"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8206884",
  //                 "logitude": "19.0083752"
  //             },
  //             "onCart": "20:05:2024 17:48",
  //             "orderId": "2TK8UOAR-5082",
  //             "order_at": "20:05:2024 17:48",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "cancel",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 17:48",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 },
  //                 {
  //                     "dateTime": "20:05:2024 17:49",
  //                     "level": "6",
  //                     "status": "Cancelled",
  //                     "status_key": "cancel"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "0",
  //                     "discount": "0",
  //                     "free": "0",
  //                     "itemId": "LRD250P",
  //                     "points": "5",
  //                     "price": "1.0",
  //                     "qty": "60",
  //                     "tax": "5",
  //                     "unit": "Kg"
  //                 },
  //                 {
  //                     "cash_disc": "0",
  //                     "discount": "0",
  //                     "free": "0",
  //                     "itemId": "LRE1KGJ",
  //                     "points": "5",
  //                     "price": "1.0",
  //                     "qty": "50",
  //                     "tax": "5",
  //                     "unit": "Kg"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 14:29",
  //             "orderId": "YSX1H3UX-0753",
  //             "order_at": "20:05:2024 14:29",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 14:30",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "12",
  //                     "discount": "2",
  //                     "free": "0",
  //                     "itemId": "ITDJK22",
  //                     "points": "5",
  //                     "price": "90",
  //                     "qty": "20",
  //                     "tax": "5"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 14:44",
  //             "orderId": "LYCQE1VH-1080",
  //             "order_at": "20:05:2024 14:44",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 14:44",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "0",
  //                     "discount": "0",
  //                     "free": "0",
  //                     "itemId": "LRD250P",
  //                     "points": "5",
  //                     "price": "1.0",
  //                     "qty": "12",
  //                     "tax": "5",
  //                     "unit": "Kg"
  //                 },
  //                 {
  //                     "cash_disc": "0",
  //                     "discount": "0",
  //                     "free": "0",
  //                     "itemId": "LRE1KGJ",
  //                     "points": "5",
  //                     "price": "1.0",
  //                     "qty": "10",
  //                     "tax": "5",
  //                     "unit": "Kg"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 11:54",
  //             "orderId": "CZE5Y723-9368",
  //             "order_at": "20:05:2024 11:54",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 11:54",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "12",
  //                     "discount": "2",
  //                     "free": "0",
  //                     "itemId": "ITDTK24",
  //                     "points": "5",
  //                     "price": "90",
  //                     "qty": "20",
  //                     "tax": "5"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 15:01",
  //             "orderId": "8RG5H9TL-6611",
  //             "order_at": "20:05:2024 15:01",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 15:02",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "12",
  //                     "discount": "2",
  //                     "free": "0",
  //                     "itemId": "ITDF34",
  //                     "points": "5",
  //                     "price": "90",
  //                     "qty": "20",
  //                     "tax": "5"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 14:39",
  //             "orderId": "PYV7AJXO-1095",
  //             "order_at": "20:05:2024 14:39",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 14:40",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "12",
  //                     "discount": "2",
  //                     "free": "0",
  //                     "itemId": "ITDJK34",
  //                     "points": "5",
  //                     "price": "90",
  //                     "qty": "20",
  //                     "tax": "5"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 14:43",
  //             "orderId": "YPWQGAMP-7030",
  //             "order_at": "20:05:2024 14:43",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 14:43",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 []
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 11:54",
  //             "orderId": "UTVE7ZQY-0317",
  //             "order_at": "20:05:2024 11:54",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 11:54",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "12",
  //                     "discount": "2",
  //                     "free": "0",
  //                     "itemId": "QWTJ24",
  //                     "points": "5",
  //                     "price": "90",
  //                     "qty": "25",
  //                     "tax": "5"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 15:08",
  //             "orderId": "7EFPPM38-7426",
  //             "order_at": "20:05:2024 15:08",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 15:08",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         },
  //         {
  //             "items": [
  //                 {
  //                     "cash_disc": "12",
  //                     "discount": "2",
  //                     "free": "0",
  //                     "itemId": "AWTJ12",
  //                     "points": "5",
  //                     "price": "90",
  //                     "qty": "25",
  //                     "tax": "5"
  //                 }
  //             ],
  //             "location": {
  //                 "lattitude": "72.8207042",
  //                 "logitude": "19.0083918"
  //             },
  //             "onCart": "20:05:2024 15:20",
  //             "orderId": "4ECW1OVN-0703",
  //             "order_at": "20:05:2024 15:20",
  //             "order_by": {
  //                 "desig": "IT",
  //                 "id": "45",
  //                 "name": "Omkar"
  //             },
  //             "r_info": {
  //                 "area": "new area",
  //                 "district": "M.P.",
  //                 "payerId": "SUS003",
  //                 "r_name": "Sushmeet",
  //                 "rid": "test123",
  //                 "s_name": "SUSHMEET ENTERPRISES, RAIPUR",
  //                 "salesgroup": "MP"
  //             },
  //             "rid": "test123",
  //             "status": "confirm",
  //             "status_logs": [
  //                 {
  //                     "dateTime": "20:05:2024 15:21",
  //                     "level": "1",
  //                     "status": "Confirm",
  //                     "status_key": "confirm"
  //                 }
  //             ]
  //         }
  //     ]
  // }

  return (
    <>
      <section className="dashboard_table">
        <Dashboard_cards
          Card_text="Today's Orders"
          Total={data.order_count}
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
