import Head from 'next/head'
import MainLayout from '../../components/MainLayout'
import RegisterLoginTab from '../../components/RegisterLoginTab'
import { Form, Button, Card } from 'react-bootstrap'
import { useState } from 'react'
import { IRegisterUser } from '../../interfaces'

const Register:React.FC = ({}) => {
  const [user, setUser] = useState<IRegisterUser>({
    email: '',
    password: '',
    username: ''
  });

  const [btnDisabled, setBtnDisablet] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/api/registration`, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': 'application/json, text/plain',
    //     'Content-Type': 'application/json;charset=UTF-8'
    //   },
    //   body: JSON.stringify(user)
    // });

    fetch(`http://westerholt-cinema.herokuapp.com/api/movies/1/`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiZXhwIjoxNjE4NjcxMTE3fQ.B7iv8Eh3V-IIBGFxg5ZWMTltYkd5s1hUdsE_fQY06SE'
      },
    }).then(data => console.log(data)); 

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));

    // console.log(user.email && user.password && user.username)

    // if (user.email && user.password && user.username) {
    //   setBtnDisablet(true)
    // }
  };

  return (
    <>
      <Head>
        <title>Register | Cinema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <RegisterLoginTab/>
        <Card style={{ width: '18rem' }} className="mx-auto mt-3">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={user.email}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="User name"
                  onChange={handleChange}
                  value={user.username}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={user.password}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                block
                disabled={btnDisabled}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </MainLayout>
    </>
  )
}

export default Register;
