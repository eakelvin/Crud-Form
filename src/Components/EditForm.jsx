import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../Store/UserReducer';

function EditForm(props) {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

      const [formData, setFormData] = useState ({
        id: props.form.id,
        name: props.form.name,
        email: props.form.email,
        gen: props.form.gen,
      });
      const {id, name, email, gen} = formData
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState, 
        [name]: value
      }))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      let updatedForm = {
        id:props.form.id,
        name,
        email,
        gen
      }
      dispatch(editUser({ id: props.form.id, updatedUser:updatedForm }))
      props.closeModal()
    }

      return (
      <>
            <Form onSubmit={handleSubmit}>
                <div className='col'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" 
                            placeholder="Enter name"
                            required 
                            name='name'
                            value={formData.name}
                            onChange={handleChange} />
                </Form.Group>
                </div>
        
              <div className='col'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" 
                              placeholder="Enter email"
                              required
                              name='email'
                              value={formData.email}
                              onChange={handleChange} />
              </Form.Group>
              </div>

              <div className='col'>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>GEN</Form.Label>
                  <Form.Control type="number" 
                              placeholder="GEN?"
                              required
                              name='gen'
                              value={formData.gen}
                              onChange={handleChange} />
              </Form.Group>
              </div>
              <Button type='submit' variant="primary">Save Changes</Button>
    
          </Form>
          
        </>
        );
    }

export default EditForm;