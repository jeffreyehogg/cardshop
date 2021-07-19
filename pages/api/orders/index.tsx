import dbConnect from '../../../utils/dbConnect'
import Order from '../../../models/Order'

export default async function orderHandler(req, res) {
  await dbConnect()

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
}
