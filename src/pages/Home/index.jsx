import Header from "../../components/Header";

import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>Desafio #2 Hiring Coders</h2>
        {/* <p>Essa página foi desenvolvida com desafio do curso Hiring Coders.</p>
         */}
        <section>
          <p>
            No desafio temos que desenvolver um sistema de inventario de
            registro e listagem de cliente e produtos tendo como base um
            ecommerce.
          </p>
        </section>
        <section className="info-course">
          <h2>Sobre o curso</h2>
          <p>
            O{" "}
            <a
              className="link"
              href="https://www.hiringcoders.com.br/"
              target="blank"
            >
              Hiring Coders
            </a>{" "}
            é um programa de capacitação gratuito e sem pré-requisitos, feito
            para todos que querem uma carreira à prova do futuro. O curso é
            oferecido na plataforma da{" "}
            <a className="link" href="https://www.gama.academy/" target="blank">
              Gama Academy
            </a>
            .
          </p>
        </section>
      </main>
      <footer>
        <div>
          <p>Dsenvolvido por:</p>
          <a className="link" href="https://linkeding.com/in/guilhermanosilva">
            Guilhermano Silva
          </a>
        </div>
      </footer>
    </>
  );
}

export default Home;
