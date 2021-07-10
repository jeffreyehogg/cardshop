import React from 'react'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Rating from './Rating'
// import styles from '../styles/Product.module.css';

const ProductComponent = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link href={`/product/${product._id}`}>
        <a>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={500}
          />
        </a>
      </Link>
      <Card.Body>
        <Link href={`/product/${product._id}`}>
          <a>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductComponent
