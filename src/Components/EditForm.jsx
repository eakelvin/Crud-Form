import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class EditForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: props.form.id,
          name: props.form.name,
          email: props.form.email,
          gen: props.form.gen,
        };
      }
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
      }

      handleSubmit = (event) => {
        event.preventDefault();
        this.props.editUser(this.state.id, this.state)
        this.setState({
            name: "",
            email: "",
            gen: ""
        })
        console.log(this.state);
        this.props.closeModal()
      }

    render() {
        return (
        <>
            <Form onSubmit={this.handleSubmit}>
                <div className='col'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" 
                            placeholder="Enter name"
                            required 
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange} />
                </Form.Group>
                </div>
        
              <div className='col'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" 
                              placeholder="Enter email"
                              required
                              name='email'
                              value={this.state.email}
                              onChange={this.handleChange} />
              </Form.Group>
              </div>

              <div className='col'>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>GEN</Form.Label>
                  <Form.Control type="number" 
                              placeholder="GEN?"
                              required
                              name='gen'
                              value={this.state.gen}
                              onChange={this.handleChange} />
              </Form.Group>
              </div>
              <Button type='submit' variant="primary">Save Changes</Button>
    
          </Form>
          
        </>
        );
    }
}

export default EditForm;