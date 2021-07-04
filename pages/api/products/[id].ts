const { products } = require('../../../lib/data')

export default function productHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req
  const product = products.filter(p => p._id === id)

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(product[0])
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `Card ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

  // if (product.length > 0) {
  //   res.status(200).json(product[0])
  // } else {
  //   res.status(404).json({ message: `Product with id: ${id} not found.` })
  // }
}
