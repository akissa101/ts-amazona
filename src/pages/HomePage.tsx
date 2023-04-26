import { Col, Row } from "react-bootstrap";
import { sampleProduct } from "../data";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Row>
        {sampleProduct.map((product) => (
          <Col key={product.name} sm={6} md={4} lg={3}>
            <Link to={`/product/${product.slug}`}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
