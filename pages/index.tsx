import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import dbConnect from '../utils/dbConnect'
import Product from '../models/Product'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ProductComponent from '../components/Product'

export default function Home() {
  const dispatch = useDispatch()

  const productList = useSelector((state: any) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Layout title="CardShop">
      <h1>Latest Cards</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductComponent product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Layout>
  )
}
