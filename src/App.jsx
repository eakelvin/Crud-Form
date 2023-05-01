import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './Forms'
import ShowForms from './ShowForms';
import MapForms from './MapForms';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [forms, setForms] = useState([])

  const addForm = (form) => {
    setForms([...forms, form])
  }
  

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Forms newUser={addForm} />
        </Col>
        <Col md="8">
          <MapForms data={forms} />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
