import React from 'react'
import { withRouter } from 'react-router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import AuthModal from './AuthModal'

class MyNavbar extends React.Component {
  state = {
    navbarExpanded: false,
    showModal: true
  }

  toggleNavExpand = () => {
    this.setState({
      navbarExpanded: !this.state.navbarExpanded
    })
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  goToHome = e => {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    const { showModal } = this.state
    return (
      <div>
        {showModal && <AuthModal toggleModal={this.toggleModal} toggleModal={this.toggleModal} />}
        <Navbar color="light" light expand="xs">
          <NavbarBrand onClick={this.goToHome} href="/">
            <img
              className="mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Cataratas.jpg"
              alt="logo"
              height="50"
            />
            NEXT TA GIRL RAM
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavExpand} />
          <Collapse isOpen={this.state.navbarExpanded} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggleModal} href="#">
                  LOGIN HERE!!!!
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(MyNavbar)
