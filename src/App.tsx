import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { sampleProduct } from "./data";

function App() {
  return (
    <div className="d-flex flex-column vb-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">TS-AMAZONA</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main className="flex items-center justify-center">
        <Container className="mt-3">
          <Row>
            {sampleProduct.map((product) => (
              <Col key={product.name} sm={6} md={4} lg={3}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
