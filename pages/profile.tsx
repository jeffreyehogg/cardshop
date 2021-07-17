import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Layout from '../components/Layout'

export default withPageAuthRequired(function Profile({ user }) {
  return <Layout title={user.name}>{user && <div>{user.name}</div>}</Layout>
})
