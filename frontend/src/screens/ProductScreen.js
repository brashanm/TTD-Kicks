import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const fetchProduct = async () => {
          const { data } = await axios.get(`/api/products/${id}`)
          setProduct(data)
        }
        fetchProduct()
      }, [ id ])
  return (
    <>
        <Link className='btn btn-light my-2 mb-3' to='/'>Go Back</Link>
        <Row>
            <Col md={7}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={5}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={` ${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h4>Price: ${product.prices}</h4>
                    </ListGroup.Item>
                </ListGroup>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                <Col>
                                <strong>${product.prices}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                <Col>
                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block w-100' type='button' disabled={product.stock === 0}>Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen