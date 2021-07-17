import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Layout from '../components/Layout'

export default withPageAuthRequired(function Profile({ user }) {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const { error, isLoading } = useUser()

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      // get id from database
      //   const { id } = user
      //   const res = await fetch(`/api/users/${id}`, {
      //     method: 'PATCH',
      //     headers: {},
      //     body: JSON.stringify({
      //       name,
      //       email,
      //       password,
      //     }),
      //   })
    }
  }

  return (
    <Layout title={user.name}>
      <Row>
        <Col md={3}>
          <h2>User Profile</h2>
          {user.picture && (
            <Image
              src={user.picture}
              alt=''
              width={100}
              height={100}
              className='rounded'
            />
          )}
          {message && <Message variant='danger'>{message}</Message>}
          {}
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder={name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder={email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button className='mt-4' type='submit' variant='primary'>
                Update
              </Button>
            </Form>
          )}
        </Col>
        <Col md={9}>
          <h2>My Orders</h2>
        </Col>
      </Row>
    </Layout>
  )
})
