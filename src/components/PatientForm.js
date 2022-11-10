import React, {useState} from 'react'
import './PatientForm.css';
import { Button } from 'react-bootstrap';
import db from '../firebase';


    const PatientForm = () => {
        const [name, setName] = useState("");
        const [medication, setMedication] = useState("");
        const [dateOfArrival, setDateOfArrival] = useState("");
        const [contact, setContact] = useState("");
        const [note, setNote] = useState("");
        const [loader, setLoader] = useState("");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setLoader(true);
    
            const database = db.firestore();
            database.collection("Patients")
            .add({
                name: name,
                medication: medication,
                dateOfArrival: dateOfArrival,
                contact: contact,
                note:note,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
              alert(error.message);
              setLoader(false);
            });
    
            setName("");
            setMedication("");
            setDateOfArrival("");
            setContact("");
            setNote([""]);
        }

       
        return (
            <div>
                <center>
                <h1 className="text-info display-4">Add a new Patient record.</h1>
                <hr/>
                <form onSubmit={handleSubmit}>
                <div className="col-md-8">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label text-left">Name: </label>  
                        <div className="col-sm-10">
                            <input type="text" value={name} className="form-control" name="name" onChange={(e) => setName(e.target.value)} required placeholder="Enter full name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label text-left">Date of Arrival:</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" name="doa" value={dateOfArrival} onChange={(e) => setDateOfArrival(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label text-left">Medication:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="medication" value={medication} onChange={(e) => setMedication(e.target.value)} required placeholder="Enter medication"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label text-left">Phone Number:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="phoneNumber" value={contact} onChange={(e) => setContact(e.target.value)} required placeholder="Enter a phone number"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">NOTE</label>
                    <textarea type="text" className="form-control" name="note" value={note} onChange={(e) => setNote(e.target.value)} required placeholder="Enter any note">
                    
                    </textarea>
                    </div>
                    <hr/>
                    </div>
                    <div id="submitButton" className="form-group col-lg-1">
                        <input type="submit" className="form-control bg-info text-white" value="Submit"/>
                    </div>
                </form>
                </center>
            </div>
        )
    //}
}

export default PatientForm;