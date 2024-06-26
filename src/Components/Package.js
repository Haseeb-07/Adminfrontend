import React from 'react';
import { Card } from 'react-bootstrap';

const Package = ({ name, numberOfPersons, destinations, startDate, endDate, price }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Number of Persons:</strong> {numberOfPersons}
        </Card.Text>
        <Card.Text>
          <strong>Destinations:</strong> {destinations.join(', ')}
        </Card.Text>
        <Card.Text>
          <strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          <strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> PKR {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Package;
