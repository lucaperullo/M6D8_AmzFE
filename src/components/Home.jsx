import { Card, Carousel, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import React from "react";

function Home() {
  return (
    <div className="home">
      <Carousel style={{ height: "200px" }}>
        <Carousel.Item>
          <img
            className="carousel_image"
            alt="Shop Computers and Accessories"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
            height="600px"
            width="1500px"
            data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg"
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel_image"
            alt="Shop Toys and Games"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
            height="600px"
            width="1500px"
            data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_2x._CB431858162_.jpg"
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel_image"
            alt="Shop the home store"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
            height="600px"
            width="100%"
            data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
          ></img>
        </Carousel.Item>
      </Carousel>
      <Container fluid>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={""} alt="product image" />
          <Card.Body>
            <Card.Title>product name</Card.Title>
            <Card.Text>asd</Card.Text>
            <Button
              style={{
                backgroundColor: "#cd9042",
                border: "none",
                color: "black",
              }}
            >
              add to cart
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
