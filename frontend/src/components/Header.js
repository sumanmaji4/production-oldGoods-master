import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'


/* if do bg="dark" variant='dark' */
const Header = () => {

  const dispatch = useDispatch()
  //const history = useHistory()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return <header>
    <Navbar bg='light' expand='lg' collapseOnSelect> 
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Oldgoods</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
              
              <SearchBox/>
              { /* <Route render={({ history }) => <SearchBox history={history} />} /> */}

                <Nav className='ml-auto'>

                {  userInfo && ( 
                  <a target="_blank" href='https://forms.gle/S4yMHBauNWgWTZbD9'>Sell Your Products</a>
                )} 

                {/* userInfo && ( 
                  <Nav.Link>
                      <a target='_blank' href='https://forms.gle/S4yMHBauNWgWTZbD9'>Sell Your Products</a>
                  </Nav.Link>
                )*/}

                
                
                <LinkContainer to='/cart'>
                    <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                </LinkContainer>

                { userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ) : ( 
                  <LinkContainer to='/login'>
                  < Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
                  </LinkContainer>
                )}

                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
                
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  </header>
}

export default Header