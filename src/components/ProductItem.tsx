import { Button, Card } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Store } from "../Store";
import React from "react";
import { CartItem } from "../types/Cart";
import { toast } from "react-toastify";
import { convertProductToCartItem } from "../utils";

function ProductItem({ product }: { product: Product }) {
  const { state, dispatch } = React.useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
    toast.success("Product added to the cart");
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>{product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button
            onClick={() => addToCartHandler(convertProductToCartItem(product))}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
