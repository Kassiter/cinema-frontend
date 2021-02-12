import MainLayout from '../../components/MainLayout'
import RegisterLoginTab from '../../components/RegisterLoginTab'
import { Form, Button, Card } from 'react-bootstrap'

const Login = () => {
  return (
    <MainLayout>
      <RegisterLoginTab/>
      <Card style={{ width: '18rem' }} className="mx-auto mt-3">
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </MainLayout>
  )
}

export default Login;
