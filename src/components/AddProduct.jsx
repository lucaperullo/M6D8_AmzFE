import React from "react";
import { Button, Modal, Form, Container } from "react-bootstrap";

class AddProduct extends React.Component {
  state = {
    loading: false,

    product: {
      name: "",
      description: "",
      brand: "",
      imageUrl: "",
      price: "",
      category: "book",
    },
    formData: null,
    show: false,
  };
  updateField = (e) => {
    let product = { ...this.state.product };
    let currentid = e.currentTarget.id;

    product[currentid] = e.currentTarget.value;

    this.setState({ product: product });
  };

  handleDelete = async () => {
    try {
      const url = `http://localhost:3003/products/${this.props._id}`;
      let response = await fetch(url, {
        method: "DELETE",
        headers: {},
      });
      if (response.ok) {
        alert("product deleted succesfully");
        this.handleClose();
      } else {
        alert("Something went wrong!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  EditFetch = async () => {
    try {
      console.log("EditFetch()");
      let response = await fetch(`http://localhost:3003/products`, {
        method: "POST",
        body: JSON.stringify(this.state.product),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });

      if (response.ok) {
        let res = await response.json();
        console.log("res of post", res);
        alert("product saved!");
        this.setState({
          product: {
            name: "",
            description: "",
            brand: "",
            imageUrl:
              "https://images-eu.ssl-images-amazon.com/images/G/29/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/IT_Outlet_OD_DSC_379x304_Dec_2020._SY304_CB413250337_.jpg",
            price: "",
            category: "",
          },
          errMessage: "",
          loading: false,
        });

        return res;
      } else {
        console.log("an error occurred");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (e) {
      console.log(e); // Error
      this.setState({
        errMessage: e.message,
        loading: false,
      });
    }
  };
  // handleImageUpload = (event) => {
  //   console.log("target", event.target);
  //   const formData = new FormData();
  //   formData.append("image", event.target.files[0]);
  //   this.setState({ formData });
  // };

  // UploadImageFetch = async (id) => {
  //   try {
  //     let response = await fetch(
  //       `http://localhost:3003/products/${id}`,

  //       {
  //         method: "POST",
  //         body: this.state.formData,
  //       }
  //     );

  //     if (response.ok) {
  //       let result = response.json();
  //       alert("Product saved!");
  //       this.setState({ loading: false });
  //       console.log(result);
  //       this.handleClose();
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.EditFetch();
  };

  // postProduct = async () => {
  //   let ProductId = await this.EditFetch();
  //   console.log(ProductId);
  //   // this.UploadImageFetch(ProductId._id);
  // };

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  render() {
    return (
      <>
        <Container style={{}}>
          <Button variant="warning" className="mx-5" onClick={this.handleShow}>
            Add a New Product
          </Button>
        </Container>
        {this.state.show && (
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <p>Add New Product</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.submitForm}>
                <Form.Group>
                  <Form.Label>Name*</Form.Label>

                  <Form.Control
                    id="name"
                    type="text"
                    value={this.state.product.name}
                    onChange={this.updateField}
                    placeholder="Ex: Retail Sales Manager"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="description">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    id="description"
                    placeholder="description"
                    value={this.state.product.description}
                    onChange={this.updateField}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Brand*</Form.Label>

                  <Form.Control
                    id="brand"
                    type="text"
                    value={this.state.product.brand}
                    onChange={this.updateField}
                    placeholder="Ex: Retail Sales Manager"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Price*</Form.Label>

                  <Form.Control
                    id="price"
                    type="number"
                    value={this.state.product.price}
                    onChange={this.updateField}
                    placeholder="price €"
                    required
                  />
                  <p>$</p>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Set image</Form.Label>
                  <Form.Control
                    type="text"
                    value="https://m.media-amazon.com/images/I/81kWGFf7ipL._AC_UL320_.jpg"
                    onChange={this.updateField}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="category">Category</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    id="category"
                    value={this.state.product.category}
                    onChange={this.updateField}
                  >
                    <option>Books</option>
                    <option>Electronics</option>
                    <option>Home</option>
                    <option>Clothes</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="d-flex px-3">
                  <Button
                    className=" deleteBtn"
                    variant="primary"
                    onClick={this.handleDelete}
                  >
                    Delete
                  </Button>

                  <Button
                    className="saveBtn ml-auto"
                    variant="primary"
                    type="submit"
                  >
                    {" "}
                    Save
                  </Button>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </>
    );
  }
}
export default AddProduct;
