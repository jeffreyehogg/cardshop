const { products } = require('../../../lib/data')

export default function productsHandler(req, res) {
  res.status(200).json(products)
}
