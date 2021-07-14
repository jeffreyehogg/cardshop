import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <h1 className='text-6xl my-5'>Sorry!</h1>
        <h2 className='text-4xl text-gray-400 mb-5'>
          This page does not exist
        </h2>
      </div>
    </Layout>
  )
}

export default NotFound
