import Image from 'next/image'
import { Container } from 'react-bootstrap'
import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout title='Page Not Found'>
      <Container className='text-center'>
        <Image src='/images/cardshoplogo.png' width={150} height={150} />
        <h1 className='text-6xl my-5'>Sorry!</h1>
        <h2 className='text-4xl text-gray-400 mb-5'>
          This page does not exist
        </h2>
      </Container>
    </Layout>
  )
}

export default NotFound
