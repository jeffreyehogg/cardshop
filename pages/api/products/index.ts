import dbConnect from '../../../utils/dbConnect'
import Product from '../../../models/Product'

export default async function productsHandler(req, res) {
  // await dbConnect()

  // const products = await Product.find({})

  // res.status(200).json(products)
  console.log('Entered the serverless function')

  return { dummy: 'data' }
}
