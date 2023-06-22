import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Forms from './Components/Forms';
import MapForms from './Components/MapForms';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {
  const users = useSelector((state) => state.users)
  
  
  // const [forms, setForms] = useState(defaultForms)

  // const addForm = (form) => {
  //   const formWithId = { ...form, id: uuidv4() };
  //   setForms([...forms, formWithId])
  // }

  // function deleteUser(formId) {
  //   setForms(forms.filter((form) => form.id !== formId))
  // }

  // function editUser(id, updatedForm) {
  //   setForms(forms.map((form) => form.id === id ? updatedForm : form))
  // }
  

  return (
    <>
    <Container>
      <Row>
        <Col>
        <Forms />{/*  newUser={addForm}  */}
        </Col>
        <Col md="8">
          <MapForms  
            // data={users} 
            // deleteUser={deleteUser} 
            // editUser={editUser} 
            />
        </Col>
      </Row>
    </Container>
    </>
  )
}


export default App;
