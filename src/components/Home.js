import React, {Component} from 'react';
import PatientsList from './PatientsList';
import PatientForm from './PatientForm';
import { BrowserRouter as Router, Switch, Routes, Route, Redirect } from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import Login from './Login';

class Home extends Component {

  render () {
    return (
      
      <Router>
      <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/all">Patient List</Nav.Link>
            <Nav.Link href="/add">Add Patient Record</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Patient Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
          
            <Route  path='/add' component={PatientForm} />
            <Route path='/all' component={PatientsList} />
      </Switch>
      </div>
    </Router>
    )
  }
};

export default Home;
