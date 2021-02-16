import Link from 'next/link'
import { useRouter } from 'next/router'
import { Nav } from 'react-bootstrap'

const RegisterLoginTab = () => {
  const router = useRouter()
  return (
    <>
      <Nav fill variant="tabs">
        <Nav.Item className={router.route === "/login" ? "active" : ""}>
          <Link href="/login">Login</Link>
        </Nav.Item>
        <Nav.Item className={router.route === "/register" ? "active" : ""}>
          <Link href="/register">Register</Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default RegisterLoginTab;
