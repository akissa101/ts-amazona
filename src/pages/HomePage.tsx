import { Col, Row } from "react-bootstrap";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProducts } from "../hooks/productHooks";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";

export default function HomePage() {
  const { isLoading, isError, error, data: products } = useGetProducts();

  return isLoading ? (
    <LoadingBox />
  ) : isError ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <div>
      <Row>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        {products?.map((product) => (
          <Col key={product.name} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
