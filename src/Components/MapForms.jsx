import React from 'react'
import ShowForms from './ShowForms'
import { Container, Row, Col } from 'react-bootstrap'

function MapForms(props) {

  // if (props.data.length === 0) {
  //   return <div>No forms to display</div>;
  // }

  const formList = props.data.map(item => {
        return <ShowForms 
                  key={item.id} 
                  form={item} 
                  deleteUser={props.deleteUser}
                  editUser={props.editUser} 
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
