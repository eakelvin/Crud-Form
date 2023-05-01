import React from 'react'
import ShowForms from './ShowForms'
import { Container, Row, Col } from 'react-bootstrap'

function MapForms(props) {

    const formList = props.data.map(item => {
        return <ShowForms form={item} />
    })

  return (
    <Container className='p-3'>
        <h2>View All Details</h2>
        <Row className=''>
            {formList}
        </Row>
    </Container>
  )
}

export default MapForms
