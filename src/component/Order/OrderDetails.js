import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearError, getOrderDetails } from "../../actions/orderAction";
import Footer from "../Layout/Header/Footer";
import Header from "../Layout/Header/Header";
import Loader from "../Layout/Loader/Loader";
import MetaData from "../Layout/MetaData";
import SubHeader from "../Layout/SubHeader/SubHeader";
import Testimonial from "../Testimonial/Testimonial";
import "./OrderDetails.scss";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getOrderDetails(id));
  }, [dispatch, alert, id, error]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="orderDetails">
          <Header />
          <SubHeader />
          <MetaData title="Order Details" />
          <Container>
            <div className="orderDetailsPage">
              <div className="orderDetailsContainer">
                <h2> #{order && order._id}</h2>
                <h2>Shipping Info</h2>
                <div className="orderDetailsContainerBox">
                  <p>
                    Name:<span>{order.user && order.user.name}</span>{" "}
                  </p>
                  <p>
                    Phone:
                    <span>
                      +880 {order.shippingInfo && order.shippingInfo.phoneNo}
                    </span>{" "}
                  </p>{" "}
                  <p>
                    Address:
                    <span>
                      {order.shippingInfo &&
                        `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                    </span>
                  </p>{" "}
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "green"
                        : "red"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "Order has been successfully Paid!"
                      : "Order has not Paid yet!"}
                  </p>
                  <p>
                    Amount:
                    <span>$ {order.totalPrice && order.totalPrice}</span>
                  </p>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "green"
                        : "red"
                    }
                  >
                    Your order in {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
              <div className="orderDetailsCartItems">
                <h2>Order Items</h2>
                <div className="orderDetailsCartItemsContainer">
                  {order.orderItems &&
                    order.orderItems.map((item) => (
                      <div key={item.product}>
                        <div>
                          <img src={item.image} alt="Product" />
                        </div>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                        <span>
                          {item.quantity + " X " + item.price} ={" "}
                          <b>{item.price * item.quantity}</b>
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Container>
          <Testimonial />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
