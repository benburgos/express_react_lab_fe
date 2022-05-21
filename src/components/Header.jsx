import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bulma-components';

const { Container, Menu, Brand, Item } = Navbar;

function Header(props) {
  return (
    <header>
      <Navbar>
        <Brand>
          <Item href="/">MY PORTFOLIO</Item>
        </Brand>
        <Menu>
          <Container>
            <Item>
              <Button to="/projects" renderAs={Link}>
                Projects
              </Button>
            </Item>
            <Item>
              <Button to="/about" renderAs={Link}>
                About
              </Button>
            </Item>
          </Container>
        </Menu>
      </Navbar>
    </header>
  );
}

export default Header;
