import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Forms from './Components/Forms';
import MapForms from './Components/MapForms';

function App() {
  const defaultForms = [
    {
      id:1,
      name: "David",
      email:"dave@gmail.com",
      gen:24
    },
    {
      id:2,
      name: "Jeff",
      email:"jeff@gmail.com",
      gen:24
    },
    {
      id:3,
      name: "Manuel",
      email:"man@gmail.com",
      gen:23
    }
  ]
  
  const [forms, setForms] = useState(defaultForms)

  const addForm = (form) => {
    setForms([...forms, form])
  }

  function deleteUser(id) {
    setForms(forms.filter((form) => form.id !== id))
  }

  function editUser(id, updatedForm) {
    setForms(forms.map((form) => form.id === id ? updatedForm : form))
  }
  

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Forms newUser={addForm} />
        </Col>
        <Col md="8">
          <MapForms  
            data={forms} 
            deleteUser={deleteUser} 
            editUser={editUser} 
            />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
