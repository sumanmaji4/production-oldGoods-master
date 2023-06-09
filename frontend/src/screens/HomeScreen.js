import React , { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Row, Col} from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'
import Paginate from '../components/Paginate'

const HomeScreen = () => {

  const dispatch = useDispatch() 

  const {keyword} = useParams()

  const {pageNumber} = useParams() || 1

  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(()=>{
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber]) 

  return (
    <>
        <h1>Latest Products</h1>

        { loading ? ( 
          <Loader/>
        ) : error ? ( 
          <Message>{error}</Message> 
        ) : (
          <>
          <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />

        </>
        )}
        
    </>
  )
}

export default HomeScreen