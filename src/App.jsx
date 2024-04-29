import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard_cards from "./components/Dashboard_cards";
import Dashboard_table from "./components/Dashboard_table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  // API Calling

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // http://192.168.0.26:5000/order_at/29:04:2024
  //   fetch("https://api.example.com/data")
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

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="dashboard_table">
        <Dashboard_cards
          Card_text="Today's Orders"
          Card_icon={<FontAwesomeIcon icon={faUsers} />}
          Icon_bg_clr="bg-success"
          ClassName="Card_1_style"
        />
        <Dashboard_cards
          Card_text="Ordered Retailors"
          Card_icon={<FontAwesomeIcon icon={faHome} />}
          Icon_bg_clr="bg-primary"
          ClassName="Card_2_style"
        />
        <Dashboard_cards
          Card_text="Ordered Payers"
          Card_icon={<FontAwesomeIcon icon={faEye} />}
          Icon_bg_clr="bg-warning"
          ClassName="Card_3_style"
        />
        <Dashboard_cards
          Card_text="No Orders"
          Card_icon={<FontAwesomeIcon icon={faTimes} />}
          Icon_bg_clr="bg-info"
          ClassName="Card_4_style"
        />
      </section>
      <section className="Dashboard_table_data">
        <Dashboard_table />
      </section>
    </>
  );
}

export default App;
