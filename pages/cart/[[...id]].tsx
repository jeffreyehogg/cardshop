import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap'
import Message from '../../components/Message'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import Layout from '../../components/Layout'

const Cart = () => {
  const router = useRouter()
  const {
    query: { id, qty },
  } = router
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
    router.push('/cart')
  }, [dispatch, id, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
    router.push('/cart')
  }

  const checkoutHandler = () => {
    router.push('/shipping')
  }

  const numItems = cartItems.reduce((acc, item) => acc + parseInt(item.qty), 0)

  return (
    <Layout title='Cart'>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message variant='info'>
              Shopping cart is empty<Link href='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={500}
                      />
                    </Col>
                    <Col md={3}>
                      <Link href={`/products/${item.product}`}>
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={3}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, parseInt(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={1}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal {numItems} {numItems === 1 ? 'item' : 'items'}
                </h2>
                $
                {cartItems
                  .reduce(
                    (acc, item) => acc + parseInt(item.qty) * item.price,
                    0
                  )
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Cart
