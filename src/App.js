import React, {Component} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

class App extends Component {

  render () {
    return (
    //   <Container className="container" style={{ width: "400px"}}>
    //   <Row>
    //     <Col>
    //       <UserAuthContextProvider>
    //       <BrowserRouter>
    //         <Switch>
    //           <Route
    //             path="/home"
    //             element={
    //               <ProtectedRoute>
    //                 <Home />
    //               </ProtectedRoute>
    //             }
    //           />
    //           <Route path="/" element={<Login />} />
    //           <Route path="/signup" element={<Signup />} />
    //         </Switch>
    //         </BrowserRouter>
    //       </UserAuthContextProvider>
    //     </Col>
    //   </Row>
    //  </Container>
   
      <Home />
    )
  }
};

export default App
