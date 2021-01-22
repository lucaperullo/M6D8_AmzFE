import React from "react";
import "./css/product.css";
import { Card, Col, Alert } from "react-bootstrap";

class Product extends React.Component {
  state = { products: [], loading: true };

  fetchProducts = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch("http://localhost:3003/products/");
      if (response.ok) {
        let products = await response.json();
        return products;
      } else {
        alert("an error accurred");
      }
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    this.fetchProducts();
  };
  render() {
    console.log(this.state.pruducts);

    return (
      <>
        {this.state.products.map((product) => (
          <div className="card_container">
            <Col sm={6} md={3} lg={4} className="card_col">
              <Card style={{ width: "18rem" }} className="product mb-2">
                <h2> {product.name}</h2>
                <Card.Body>
                  <img src={product.imageUrl} alt="" />
                  <p className="text-center text-muted">{product.price}</p>
                </Card.Body>
                <p
                  onClick={() =>
                    this.props.history.push(`/details/${product._id}`)
                  }
                >
                  {" "}
                  Show more{" "}
                </p>
              </Card>
            </Col>
          </div>
        ))}
      </>
    );
  }
}
export default Product;
