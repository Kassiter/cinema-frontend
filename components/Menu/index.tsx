import Link from 'next/link'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Nav className="mr-auto">
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
          <Link href="/login">Login</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default Menu;
