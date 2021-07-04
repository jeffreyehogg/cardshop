import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import Product from '../components/Product'

export default function Home({ data }) {
  const [products, setProducts] = useState(data)

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
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/products`)
  const data = await res.json()
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}
