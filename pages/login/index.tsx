import Head from 'next/head'
import MainLayout from '../../components/MainLayout'
import RegisterLoginTab from '../../components/RegisterLoginTab'
import { Form, Button, Card } from 'react-bootstrap'
import { useState } from 'react'

interface IUser {
  email: string
  password: string
}

const Login:React.FC = ({}) => {
  const [user, setUser] = useState<IUser>({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/api/login`, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(user)
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <MainLayout>
      <Head>
        <title>Login | Cinema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterLoginTab/>
      <Card style={{ width: '18rem' }} className="mx-auto mt-3">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={ user.email }
                onChange={ handleChange }
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={ user.password }
                onChange={ handleChange }
              />
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
