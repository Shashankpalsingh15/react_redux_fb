import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import {random, commerce} from "faker";
import { v4 as uuid } from 'uuid';
import { onDetails } from "../Store/Action/detailAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.detailReducer);
  console.log("Dispatch", dispatch);
  console.log("state", state);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    dispatch(onDetails());
    // setProduct(allProduct);
  }, [dispatch]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error",
      });
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Complete", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

//   const renderData = (photos) => {
//     //   debugger

//     // const allProduct = photos.map((photo) => ({
//     // //   smallImage: photo.src.medium,
//     // //   tinyImage: photo.src.tiny,
//     // //   productName: random.word(),
//     // //   productPrice: commerce.price(),
//     // //   id: random.uuid(),
//     // }));
//     return photos;
//   };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
        {/*  {renderData(state.data || [])}
  {state.data && state.data.length > 0 && JSON.stringify(state.data)} */}
          {/* <BuyPage addInCart={addInCart} /> */}
        </Col>
        <Col md="4">
          {/*<Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />*/}
        </Col>
      </Row>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
