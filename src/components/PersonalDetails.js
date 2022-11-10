import React from 'react';
import { Card, Button } from 'react-bootstrap';
import AllergiesList from './AllergiesList';

/**
 * Component for displaying the personal details of a patient in the PatientDetails component. 
 * Checks if details need to be changed and renders form to do so depending on the editDetails prop.
 * @param {} props - PatientDetails state.
 */
const PersonalDetails = (props) => {
    if (props.editDetails) {
        return (
            <div>
                <Card.Title>{`Triaged on: ${props.patient.triageDate}`}</Card.Title>
                <form>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label text-left">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" name="email" value={props.email} onChange={props.handleEmailChange} required placeholder={props.patient.email}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phoneNumber" className="col-sm-2 col-form-label text-left">Phone Number:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="phoneNumber" value={props.phoneNumber} onChange={props.handlePhoneNumberChange} required placeholder={props.patient.phoneNumber}/>
                        </div>
                    </div>
                    <hr/>
                    <div id="allergiesDiv" className="form-group row  col-sm-12">
                        <h1 className="text-info h4 float-left">Allergies</h1>
                        <Button variant="outline-info float-right" onClick={(allergy) => props.addAllergyField(allergy)}>Add New Allergy</Button>
                    </div>
                    {
                        props.allergies.map((allergy, index) => {
                            return (
                                <div key={index} className="form-group row col-sm-12 input-group">
                                    <input type="text" className="form-control" value={allergy} onChange={(newAllergy) => props.addAllergyValue(newAllergy, index)} placeholder="New Allergy"/>
                                    <button className="input-group-append form-control text-danger col-sm-2" onClick={() => props.removeAllergyField(index)}>Remove</button>
                                </div>
                            )
                        })
                    }
                </form>
            </div>
        )
    }

    return (
        <div>
            <Card.Title>{`Triaged on: ${props.patient.triageDate}`}</Card.Title>
            <Card.Text>{`Date of Birth: ${props.patient.dateOfBirth}`}</Card.Text>
            <Card.Text>{`Email Address: ${props.patient.email}`}</Card.Text>
            <Card.Text>{`Telephone Number: ${props.patient.phoneNumber}`}</Card.Text>
            <hr/>
            <AllergiesList allergies={props.allergies}/>
        </div>
    )
}

export default PersonalDetails;