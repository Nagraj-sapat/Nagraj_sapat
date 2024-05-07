import React from "react";
import "../Styles/Dashboard_cards.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard_cards(props) {
  return (
    <>
      <div className="Card_container rounded-1">
        <div className="icon_container position-relative">
          <div
            className={`card_icon position-absolute rounded-2 text-white text-center fs-4 ${props.Icon_bg_clr}`}
          >
            {props.Card_icon}
          </div>
        </div>
        <div className="today_orders_content">
          <p className={`today_orders text-end pt-2 ${props.ClassName}`}>
            {props.Card_text}
          </p>
          <h2 className="today_orders_count text-end pe-2">{props.Total}</h2>
        </div>
      </div>
    </>
  );
}

export default Dashboard_cards;
