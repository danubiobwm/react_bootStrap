import React from 'react';
import { Card } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <br />
      <Card bg="dark" text="white" style={{ width: '100%' }}>
        <Card.Header style={{ textAlign: 'center' }}>
          Projeto ReactJS com Bootstrap
        </Card.Header>
        <Card.Body>
          <Card.Text style={{ textAlign: 'center', height: '5px' }}>
            @Danubio de Araujo
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
