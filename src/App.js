import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, CardDeck, Card,Navbar,Nav,NavDropdown,Button,Form,FormControl,CardColumns} from 'react-bootstrap'


class App extends Component {
  render() {
    return (
      //<div className="card" style={{width:'90rem'}}>
          <div>
            <div>
              <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home" style={{color: 'white'}}>
                    <img
                        alt=""
                        src={require("./images/logo.svg")}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                  {' Royal Brothers'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home" style={{color: 'white'}}>Home</Nav.Link>
                    <Nav.Link href="#link" style={{color: 'white'}}>Link</Nav.Link>
                    <NavDropdown  title="Bikes In Bangalore" id="basic-nav-dropdown" style={{color: 'white'}}>
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                      <Button variant="outline-info">Sign Up</Button>
                      <Button variant="outline-info">Login</Button>
                </Navbar.Collapse>
              </Navbar>
              <Image style={{height:'20rem',width:'100%'}} src={require("./images/traffic2.jpg")} fluid />
            </div>
            
            <div style={{display:'flex',flex:0.8,flexDirection:'row',justifyContent:'center', backgroundColor:'#D3D3D3'}}>
              <div style={{display:'flex',flex:0.8,flexDirection:'row'}}>
                <CardDeck style={{paddingTop: '3%'}}>
                  <Card style={{backgroundColor: 'grey', height:'70%', width:'20rem'}}>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{backgroundColor: 'grey', height:'70%', width:'20rem'}}>
                    <Card.Body>
                      <Card.Title style={{alignItems:'top'}}>Card title</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{backgroundColor: 'grey', height:'70%', width:'20rem'}}>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{backgroundColor: 'grey', height:'70%', width:'20rem'}}>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>   
            </div>
             <div className="text-center"><h2>OUR SPECIALITY</h2></div>
             <div style={{display:'flex',flex:0.8,flexDirection:'row',justifyContent:'center'}}>
              <div style={{display:'flex',flex:0.8,flexDirection:'row'}}>
                <CardColumns>
                    <Card border="white">
                      <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="p-3" border="white">
                      <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card border="white">
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="text-center p-3" border="white">
                      <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="text-center" border="white">
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card border="white">
                      <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                      </Card.Body>
                    </Card>
                  </CardColumns>
              </div>
            </div>

            <div style={{display:'flex',flex:0.8,flexDirection:'row',justifyContent:'center', backgroundColor:'#D3D3D3'}}>
              <div style={{display:'flex',flex:0.8,flexDirection:'row'}}>        
                  <CardColumns>
                    <Card style={{width: '55%'}}>
                      <Card.Img variant="top" src={require("./images/bike1.jpg")}/>
                    </Card>
                    <Card className="p-3" style={{width: '55%'}}>
                      <Card.Img variant="top" src={require("./images/bike2.jpg")}/>
                    </Card>
                    <Card style={{width: '55%'}}>
                      <Card.Img variant="top" src={require("./images/bike3.jpg")}/>
                    </Card>
                    <Card className="text-center p-3" style={{width: '55%'}}>
                       <Card.Img variant="top" src={require("./images/bike2.jpg")}/>
                    </Card>
                    <Card className="text-center" style={{width: '55%'}}>
                      <Card.Img variant="top" src={require("./images/bike2.jpg")}/>
                    </Card>
                    <Card style={{width: '55%'}}>
                      <Card.Img variant="top" src={require("./images/bike2.jpg")}/>
                    </Card>
                    <Card style={{width: '55%'}}>
                      <Card.Img variant="top" src={require("./images/bike1.jpg")}/>
                    </Card>
                    <Card className="p-3" style={{width: '55%'}}>
                      <Card.Img variant="top" src={require("./images/bike2.jpg")}/>
                    </Card>
                    <Card style={{width: '55%'}}>
                      <Card.Img variant="top" src={require("./images/bike3.jpg")}/>
                    </Card>
                  </CardColumns>
             </div>
            </div>
          </div>
    );
  }
}

export default App;
