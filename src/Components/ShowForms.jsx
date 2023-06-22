import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditForm from './EditForm';
import { deleteUser } from '../Store/UserReducer';
import { useDispatch, useSelector } from 'react-redux';

function ShowForms(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const users = useSelector(state => state.users)
    const disptach = useDispatch()

    const handleDelete = (id) => {
        disptach(deleteUser({id: id}))
      };

  return (
    <>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm form={props.form} closeModal={handleClose} />
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
        <Card className='mb-3 mx-2' style={{ width: '16rem' }}>
            <Card.Body>
            <Card.Title>Students Details</Card.Title>
                <ul>
                    <li>Name - {props.form.name} </li>
                    <li>Email - {props.form.email}</li>
                    <li>Gen - {props.form.gen}</li>
                </ul>
            <button onClick={handleShow}>Edit</button>
            <button onClick={() => handleDelete(props.form.id)}>Delete</button>
            </Card.Body>
        </Card>
  </>
  )
}

export default ShowForms;