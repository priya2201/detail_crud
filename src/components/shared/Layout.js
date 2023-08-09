import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Layout(props){
return(
    <div>
        <Navbar expands="lg" variant="dark" bg="success">
            <Container>
                <Navbar.Brand>Fruits Bucket</Navbar.Brand>
            </Container>

        </Navbar>
        <Container>{props.children}</Container>
    </div>
)
}
export default Layout;