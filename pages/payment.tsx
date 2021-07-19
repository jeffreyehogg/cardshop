import { useState } from 'react'
import { useRouter } from 'next/router'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import Layout from '../components/Layout'
import Progress from '../components/Progress'
import { savePaymentMethod } from '../actions/cartActions'

export default withPageAuthRequired(function Payment() {
  const cart = useSelector((state: any) => state.cart)
  const { shippingAddress } = cart
  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const router = useRouter()
  const dispatch = useDispatch()

  if (!shippingAddress) {
    router.push('/shipping')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    router.push('/order')
  }

  return (
    <Layout title='Shipping'>
      <Progress step1 step2 step3 step4={false} />
      <FormContainer>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col sm={4}>
              <Form.Check
                type='radio'
                label='PayPal or Credit Card'
                id='PayPal'
                name='paymentMethod'
                value='PayPal'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </Layout>
  )
})
