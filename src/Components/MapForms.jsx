import React from 'react'
import ShowForms from './ShowForms'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function MapForms(props) {
  const users = useSelector((state) => state.users)

  // if (props.data.length === 0) {
  //   return <div>No forms to display</div>;
  // }

  const formList = users.map(item => {
        return <ShowForms 
                  key={item.id} 
                  form={item} 
                  
                />
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
