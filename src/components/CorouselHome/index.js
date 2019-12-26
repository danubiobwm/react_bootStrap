import React from 'react';

import { Carousel } from 'react-bootstrap';
import Img1 from '../../assets/b1.jpg';
import Img2 from '../../assets/b2.jpg';
import Img3 from '../../assets/b3.jpg';

export default function CorouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="Kali Linux"
          width="100"
          height="500"
        />
        <Carousel.Caption>
          <h3>Kali Linux</h3>
          <p>
            Kali Linux é uma distribuição GNU/Linux baseada no Debian,
            considerado o sucessor do Back Track.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Third slide"
          width="100"
          height="500"
        />

        <Carousel.Caption>
          <h3>Hacker</h3>
          <p>
            Hacking são as atividades que procuram comprometer dispositivos
            digitais como computadores, smartphones, tablets e até mesmo redes
            inteiras.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="watch dogs"
          width="100"
          height="500"
        />

        <Carousel.Caption>
          <h3>watch dogs</h3>
          <p>
            Watch Dogs é jogado numa perspectiva em terceira pessoa e o mapa
            pode ser percorrido a pé ou em um veículo. A história é contada numa
            versão fictícia da cidade de Chicago, que inclui a sua zona urbana,
            os campos em redor e os bairros pobres.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
