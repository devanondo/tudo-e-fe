import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.scss";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon className="icon" />
      <p>Your order has been placed successfully</p>
      <Link className="greenButton" to="/orders">
        View Order
      </Link>
    </div>
  );
};

export default OrderSuccess;
