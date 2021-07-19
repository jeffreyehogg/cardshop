import dbConnect from '../../../utils/dbConnect'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import Order from '../../../models/Order'

export default withApiAuthRequired(async function orderHandler(req, res) {
  await dbConnect()
  const session = getSession(req, res)

  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (!orderItems || !shippingAddress || !paymentMethod) {
    throw new Error('Missing parameters')
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createOrder = await order.save()

    res.status(201).json(createOrder)
  }
})
