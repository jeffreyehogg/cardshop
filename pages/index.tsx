import { useState, useEffect } from 'react'
import dbConnect from '../utils/dbConnect'
import Product from '../models/Product'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import ProductComponent from '../components/Product'

export default function Home({ products }) {
  // const [products, setProducts] = useState(products)

  return (
    <Layout title='CardShop'>
      <h1>Latest Cards</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductComponent product={product} />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await Product.find({})
  const products = result.map((doc) => {
    const product = doc.toObject()
    product._id = product._id.toString()
    return product
  })

  return {
    props: {
      products: products,
    },
  }
}
