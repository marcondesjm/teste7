import React from "react";

import van from "../../../images/van-jonathan.jpg";

function OurHistory() {
  return (
    <div className="ourhistory">
      <h2>Nossa História</h2>
      <hr />
      <p>
        Possuímos soluções completas e experiência comprovada no mercado de
        manutenção geral, serviços de repareos em laptop, impressora, pc, smartphone e drones. Também criamos sites profissionais
      </p>
      <div className="card-aboutUs">
        <div className="img-van" style={{ background: `url(${van})` }} />
        <div className="txt-aboutUs-container">
          <h1>Nós Somos Profissionais</h1>
          <hr />
          <p className="txt-desktop">
            A HomeTech nasceu em São José, Santa Catarina, no Brasil
            em 2012 com o objetivo de oferecer soluções completas em manutenção
            geral. Hoje, a HomeTech é reconhecida
            por seus serviços de alta qualidade, agilidade e proficiência,
            atendendo a diversas áreas, serviços de repareos em laptop, impressora, pc, smartphone e drones. Também criamos sites profissionais. Nosso compromisso com a excelência é
            o que garante a satisfação de seus clientes.
          </p>

          <p className="txt-tablet">
          A HomeTech nasceu em São José, Santa Catarina, no Brasil
            em 2012 com o objetivo de oferecer soluções completas em manutenção
            geral. Hoje, a HomeTech é reconhecida
            por seus serviços de alta qualidade, agilidade e proficiência,
            atendendo a diversas áreas, serviços de repareos em laptop, impressora, pc, smartphone e drones. Também criamos sites profissionais. Nosso compromisso com a excelência é
            o que garante a satisfação de seus clientes.
          </p>

          <p className="txt-mobile">
          A HomeTech nasceu em São José, Santa Catarina, no Brasil
            em 2012 com o objetivo de oferecer soluções completas em manutenção
            geral. Com anos de experiência e dedicação, a empresa se destacou no
            mercado brasileiro e teve a oportunidade de expandir suas atividades
            para todo o Brasil. Hoje, a HomeTech é reconhecida
            por seus serviços de alta qualidade, agilidade e proficiência,
            atendendo a diversas áreas, serviços de repareos em laptop, impressora, pc, smartphone e drones. Também criamos sites profissionais. Seu compromisso com a excelência é
            o que garante a satisfação de seus clientes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurHistory;
