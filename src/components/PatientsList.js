import React, {Component} from 'react'
import { db, auth } from '../firebase'
import './PatientsList.css';
import { Link } from 'react-router-dom';
import { async } from '@firebase/util';
import Table from 'react-bootstrap/Table';

class PatientsList extends React.Component {
  state = {
    Patients: null,

  }



  componentDidMount() {
    console.log('mounted');
    const database = db.collection('Patients')
      .get()
      .then( snapshot => {
        const Patients = []
        snapshot.forEach( doc => {
          const data = doc.data()
          Patients.push(data)
        })
          this.setState( { Patients: Patients } )
         //  console.log(snapshot)
      })
        .catch( error => console.log(error))
  }
 

  render () {


    return (
     <div className='App'>
      
     <Table striped>
     <thead>
     <tr>
     <th>NAME</th>
     <th>CHECK-UP DATE</th>
     <th>MEDICATION</th>
     <th>NOTE</th>
     <th>CONTACT</th>
   </tr>
     </thead>
     {
        this.state.Patients && 
        this.state.Patients.map( Patients => {
          return (
            
            <tbody>
        <tr>
          <td>{Patients.name}</td>
          <td>{Patients.dateOfArrival}</td>
          <td>{Patients.medication}</td>
          <td>{Patients.note}</td>
          <td>{Patients.contact}</td>
        </tr>
    
            </tbody>
  
          )
        })
      }
      </Table>
     </div>
    );
  };
}

export default PatientsList;