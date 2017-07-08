import React from 'react'
import { Row, Col } from 'react-bootstrap'

require('../style/header-style.css')

const Header = () => {
  return (
    <Row>
      <Col md={4}>
        <h1>Panos contracting</h1>
      </Col>
    </Row>
  )
}

export default Header
