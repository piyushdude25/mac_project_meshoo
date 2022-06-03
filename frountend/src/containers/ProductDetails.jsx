import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

import {fetchProduct,removeSelectedProduct} from "../redux/actions/ProductAction";
import { addcart } from "../CartRedux/action";
import "./ProductDetails.css";
import { CartContext } from "../contextApi/CartContext";
import { ADD_CART } from "../CartRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { blue, red } from "@mui/material/colors";
import { Stack,Rating} from '@mui/material'
import {ActionTypes} from "../redux/constants/action-types";

const ProductDetails = () => {
  const dispatch = useDispatch();
  // const { productId } = useParams();
  const { id } = useParams();
  let product = useSelector((state) => state.product);
  // const [product, setProduct] = useState([]);

  
  // useEffect(() => {
  //   axios.get(`https://meesho123.herokuapp.com/products/${id}`)
  //   .then((response) => {
  //     console.log(response.data);
  //     setProduct(...[response.data]);
  //   });
  // }, []);

//by thunk...
useEffect(() => {
  if (id && id !== "") dispatch(fetchProduct(id));
  return () => {
    dispatch(removeSelectedProduct());
  };
}, []);


  const {
    Pid,
    image,
    img1,
    img2,
    img3,
    name,
    price,
    category,
    delivery,
    reviews,
    discount,
    sub_category,
    gender,
    product_type,
    ratings,
    description,
  } = product;



  const handlecart = (product) => {
    axios
      .post("https://meesho123.herokuapp.com/cart", {product})
      .then((res) => {
        console.log("Add to cart", res.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="ui grid container" key={id}>
     
      {product.length ===0  ? ( 
      <img src="http://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Social_dino-with-hat.gif" style={{ width: "100%", height: "100%" }}alt=""/>
      )
      
      : (
        <div className="mainBox flex">
          <div className="leftSide border">
            <div className="mImg">
              <img  className="imgs" src={img1} alt={name} />
              <img  className="imgs" src={image} alt={name} />
            </div>
            
            <div className="sImg flex">
              <img className="imgs" src={img1} alt={name} />
              <img className="imgs" src={img2} alt={name} />
              <img className="imgs" src={img3} alt={name} />
            </div>

            </div>

          <div className="rightSide border">
            <div className="">
              <h2>{name}</h2>

              <div className="flex gap3 ">
                <h2>${price} </h2>
                <h4> ${discount} </h4>
                <h4> {(price - discount) / 100}% OFF </h4>
              </div>

              <div className="flex gap3">
                <div>{ratings} </div>
                <Rating value={Math.floor(ratings)} precision={0.5} size='small' style={{color: 'green'}}   />
                <div>{reviews} Reviews</div>
              </div>

              <div>${(discount + 7) / 10} discount on 1st order</div>
              <div>{delivery} Delivery</div>
            </div>

            <div className="flex gap3 ">
              <div>
                <h3>Category</h3>
                <p>{category}</p>
              </div>

              <div>
                <h3>Sub Category</h3>
                <p>{sub_category}</p>
              </div>

              <div>
                <h3>Gender</h3>
                <p>{gender}</p>
              </div>

              <div>
                <h3>Product Type</h3>
                <p>{product_type}</p>
              </div>
            </div>

            <div className="details ">
              <h2>Product Details :</h2>
              {/* <p>Name : {name}</p>
                <p>Gender : {gender}</p>
                <p>Category : {category}</p>
                <p>Sub Category : {sub_category}</p>              
                <p>Product Type : {product_type}</p> */}
              <p>Description : {description}</p>
            </div>



            
          </div>
          <div  className="buttons-cart">
           {/* <Button variant="outlined" onClick={() =>handlecart(product)}>ADD CART</Button> */}

           <Button className="btns" variant="outlined" onClick={() => dispatch({type:ActionTypes.ADD_CART, payload:product})}>ADD TO CART</Button>
           
         
           <Link to="/product/cart">  <Button className="btns" variant="outlined"> Go To Checkout</Button></Link>
</div>
            
          
          </div>
        
      )}
    </div>
  );
};

export default ProductDetails;
