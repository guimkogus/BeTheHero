import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Section } from './styles';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Main() {
  return (
    <Container>
      <div className="logon-container">
        <Section>
          <section className="form">
            <img src={logoImg} alt="Be The Hero" />
            <form>
              <h1>Faça seu logon</h1>

              <input placeholder="Sua ID" />
              <button className="button" type="submit">
                Entrar
              </button>

              <a href="/register">
                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
              </a>
            </form>
          </section>
        </Section>
        <img src={heroesImg} alt="Heroes" />
      </div>
    </Container>
  );
}
