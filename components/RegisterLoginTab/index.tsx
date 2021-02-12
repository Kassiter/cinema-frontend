import Link from 'next/link'
import { useRouter } from 'next/router'
import { Nav } from 'react-bootstrap'

const RegisterLoginTab = () => {
  const router = useRouter()
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link href="/login">Login</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link href="/register">Register</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default RegisterLoginTab;
