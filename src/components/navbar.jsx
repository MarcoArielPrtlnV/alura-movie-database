import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
const NavBar = ({ query, changeHandler, searchMovie}) => {

    return (

        <Navbar bg="dark" expand="lg" variant="dark">

        <Container fluid>

          <Navbar.Brand href="/home" className='navbar-brand'>Alura Mdb</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">

            <Nav className="me-auto my-2 my-lg-3" style={{ maxHeight: '100px' }} navbarScroll></Nav>
            <Form className="d-flex" onSubmit={searchMovie}>

              <FormControl
                type="search"
                placeholder="Type a movie name..."
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              >
              </FormControl>
              <Button variant="secondary" type="submit">Search</Button>

            </Form>
          </Navbar.Collapse>

        </Container>

      </Navbar>
    )
}

export default NavBar;