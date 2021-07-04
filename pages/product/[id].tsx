import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../../components/Rating'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
// import { listProductDetails } from '../../actions/productActions';

// import { products } from '../../lib/data'
// import useSwr from 'swr'

// const fetcher = url => fetch(url).then(res => res.json())

// export async function getStaticProps({ params: { id } }, products) {
//   const product = products.filter(p => p._id === id)[0]
//   return {
//     props: {
//       product,
//     }, // will be passed to the page component as props
//   }
// }

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/products`)
//   const products = await res.json()

//   const paths = products.map(p => ({
//     params: {
//       id: p._id,
//     },
//   }))
//   return {
//     paths,
//     products,
//     fallback: false, // See the "fallback" section below
//   }
// }

const ProductPage = ({ product }) => {
  // const [product, setProduct] = useState([])

  // const [qty, setQty] = useState(1);
  // const dispatch = useDispatch();
  // const productDetails = useSelector(state => state.productDetails);
  // const { loading, error, product } = productDetails;

  // const router = useRouter()
  // const product = products.filter(p => p._id === router.query.id)

  // useEffect(() => {
  //   dispatch(listProductDetails(id));
  // }, [dispatch, match]);

  // const addToCartHandler = e => {
  //   e.preventDefault();
  //   router.push(`/cart/${id}?qty=${qty}`);
  // };
  return (
    <>
      {product.name}
      {/* <Link href="/">
        <a className="btn btn-light my-3">Go Back</a>
      </Link>
      <h1>{product[0].name}</h1>
      <Row>
        <Col md={6}>
          <Image src={product[0].image} alt={product[0].name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product[0].name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product[0].rating}
                text={`${product[0].numReviews} reviews`}
                color="#f8e825"
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product[0].price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product[0].description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product[0].price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {product[0].countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn"
                  disabled={product[0].countInStock === 0}
                  type="button"
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      ) */}
    </>
  )
}

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:3000/api/products`)
//   const data = await res.json()
//   return {
//     props: {
//       data,
//     }, // will be passed to the page component as props
//   }
// }

export default ProductPage
