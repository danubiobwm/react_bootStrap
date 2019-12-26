import React, { Component } from 'react';
import { Container, Row, Card, Button, CardDeck } from 'react-bootstrap';

class Cards extends Component {
  state = {
    cards: [
      {
        imagem:
          'https://observatoriodocinema.bol.uol.com.br/wp-content/uploads/2019/10/star-wars-the-rise-of-skywalker-.jpg',
        title: 'Fumaça',
        text:
          'Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas',
      },
      {
        imagem:
          'https://gamesmax.com.br/wp-content/uploads/2019/10/Jogos-de-Terror-mais-Assustadores.jpg',
        title: 'Lançamentos de games',
        text: 'Confira os lançamentos PS4 em Janeiro de 2019 no Compare Games.',
      },
      {
        imagem:
          'https://mundofunko.com/blog/wp-content/uploads/2019/06/mortal_kombat.jpg',
        title: 'Mortal Kombat',
        text:
          'Mortal Kombat é uma série de jogos criados pelo estúdio de Chicago da Midway Games. ',
      },
    ],
  };

  render() {
    return (
      <>
        <div className="text-center mt-4 mb-4">
          <Container className="d-flex justify-content-center">
            <Row>
              {this.state.cards.map(card => (
                <CardDeck>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card.imagem} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button variant="primary">Veja Mais..</Button>
                    </Card.Body>
                  </Card>
                </CardDeck>
              ))}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Cards;
