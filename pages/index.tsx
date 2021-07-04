import { Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import Product from '../components/Product';

import products from './api/products';

export default function Home() {
  return (
    <Layout title="CardShop">
      <h1>Latest Cards</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
