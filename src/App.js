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
                  <Card style={{backgroundColor: 'grey', height:'80%', width:'20rem'}}>
                    <Card.Body>
                      <Card.Title>40+ <br/>CITIES</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{backgroundColor: 'grey', height:'80%', width:'20rem'}}>
                    <Card.Body>
                      <Card.Title>5 M <br/>KILOMETERS</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{backgroundColor: 'grey', height:'80%', width:'20rem'}}>
                    <Card.Body>
                      <Card.Title>4.6 * <br/>ON FACEBOOK</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card style={{backgroundColor: 'grey', height:'80%', width:'20rem'}}>
                    <Card.Body>
                      <Card.Title>4.5 * <br/>ON GOOGLE</Card.Title>
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
                        <Card.Title><h1 className="text-center" style={{color:'yellow'}}>1</h1>First RTO Authorised bike rental</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="p-3" border="white">
                      <Card.Body>
                        <Card.Title><h1 className="text-center" style={{color:'yellow'}}>4</h1>Bikes in top notch condition</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card border="white">
                      <Card.Body>
                        <Card.Title><h1 className="text-center" style={{color:'yellow'}}>2</h1>Timely pick up and drop off</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="text-center p-3" border="white">
                      <Card.Body>
                        <Card.Title><h1 className="text-center" style={{color:'yellow'}}>5</h1>Commercial insurance is covered</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card className="text-center" border="white">
                      <Card.Body>
                        <Card.Title><h1 className="text-center" style={{color:'yellow'}}>3</h1>Most trusted & transparent process</Card.Title>
                      </Card.Body>
                    </Card>
                    <Card border="white">
                      <Card.Body>
                        <Card.Title><h1 className="text-center" style={{color:'yellow'}}>6</h1>19 pickup locations in Bangalore</Card.Title>
                      </Card.Body>
                    </Card>
                  </CardColumns>
              </div>
            </div>

            <div style={{display: "flex",flex:1,justifyContent:"center", backgroundColor:'#D3D3D3'}}>
              <div style={{display: "flex",flex:0.9,flexDirection:'column'}}>
                 <h2 className="text-center">OUR FLEET</h2>
                 <br/>
                <div style={{display: "flex",flex:1,flexDirection:'row',justifyContent:"center"}}>        
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike1.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike2.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike3.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                      <Card.Img variant="top" src={require("./images/bike4.jpg")}/>
                  </Card>
                </div>
                <div style={{display: "flex",flex:1,flexDirection:'row',justifyContent:"center"}}>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike5.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike6.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike7.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike8.jpg")}/>
                  </Card>
                </div>
                <div style={{display: "flex",flex:1,flexDirection:'row',justifyContent:"center"}}>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike9.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike10.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike11.jpg")}/>
                  </Card>
                  <Card style={{width: "100%"}}>
                    <Card.Img variant="top" src={require("./images/bike12.jpg")}/>
                  </Card>
                </div>
              </div>
            </div>
            
              <div className="bg-dark" style={{display: "flex",flex:1,flexDirection:'column'}}>
                    <Navbar sticky="bottom">
                      <img  src={require("./images/logo.svg")} style={{width:'8%'}}/>
                      <h1 className="text-white">{'Royal Brothers'}</h1>
                      <Navbar.Collapse className="justify-content-center">
                      <Navbar.Text>
                        <h5 className="text-white">Company</h5>
                      </Navbar.Text>
                    </Navbar.Collapse>

                  </Navbar>
              </div>
          </div>
    );
  }
}

export default App;
