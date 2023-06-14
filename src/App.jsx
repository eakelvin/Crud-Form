import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Forms from './Components/Forms';
import MapForms from './Components/MapForms';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const defaultForms = [
    {
      id:uuidv4(),
      name: "David",
      email:"dave@gmail.com",
      gen:24
    },
    {
      id:uuidv4(),
      name: "Jeff",
      email:"jeff@gmail.com",
      gen:24
    },
    {
      id:uuidv4(),
      name: "Manuel",
      email:"man@gmail.com",
      gen:23
    }
  ]
  
  const [forms, setForms] = useState(defaultForms)

  const addForm = (form) => {
    const formWithId = { ...form, id: uuidv4() };
    setForms([...forms, formWithId])
  }

  function deleteUser(formId) {
    setForms(forms.filter((form) => form.id !== formId))
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
