import React, { Component } from 'react';
import { Col, Container, Row, Card, Button, CardDeck } from 'react-bootstrap';
import api from '../../services/api';

class Digimon extends Component {
  state = {
    digimons: [{}],
  };

  async componentDidMount() {
    const digimonApi = await api.get('digimon');

    this.setState({ digimons: digimonApi.data });
  }

  render() {
    return (
      <>
        <Container className="d-flex justify-content-center">
          <Row>
            {this.state.digimons.map(digimon =>
              digimon.id <= 8 ? (
                <Col sm={3}>
                  <CardDeck>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={digimon.img} />
                      <Card.Body>
                        <Card.Title>{digimon.name}</Card.Title>
                        <Card.Text>{digimon.level}</Card.Text>
                        <Button variant="primary">Veja Mais..</Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </Col>
              ) : (
                ''
              )
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default Digimon;
