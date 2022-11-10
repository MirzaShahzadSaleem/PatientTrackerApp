import React from 'react';
import { Card } from 'react-bootstrap';

    /**
     * Component function for conditional rendering of a patients allergies, returns list of allergies if present or no allergies string if none.
     * @param {allergies} param0 - Array of strings representing a patients allergies.
     */
    function AllergiesList({ allergies }) {
        if (allergies.length > 0) {
            return (
                <div>
                <Card.Title>Allergies:</Card.Title>
                    {
                    allergies.map((allergy) => (
                        <div key={allergy}><h6 className="text-danger">{allergy}</h6></div>
                    ))}
                </div>
            )
        }
        
        return <Card.Title>No allergies on record.</Card.Title>
    }

export default AllergiesList;