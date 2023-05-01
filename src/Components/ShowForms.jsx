import React from 'react'
import Card from 'react-bootstrap/Card';

function ShowForms(props) {
  return (
    <>
        <Card className='mb-3 mx-2' style={{ width: '16rem' }}>
            <Card.Body>
            <Card.Title>Students Details</Card.Title>
                <ul>
                    <li>Name - {props.form.name} </li>
                    <li>Email - {props.form.email}</li>
                    <li>Gen - {props.form.gen}</li>
                </ul>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>
  </>
  )
}

export default ShowForms;