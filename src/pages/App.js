import React from 'react';
import WheelComponent from '../components/wheel';
import '../index.css';
import ClickIcon from '../assets/Click_Icon.jpeg';
import MarcaSebrae from '../assets/marca-sebrae.png';
import logo_educampo from '../assets/logo_educampo.png';

import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const segments = ['Produção', 'Qualidade', 'Curiosidades'];
  const segColors = ['#055bb9', '#5c7b2d', '#04939b'];
  const onFinished = (winner) => {
    //console.log(winner);
    setTimeout(() => {
      navigate(`/${winner}`);
    }, 1000);
  };

  let rotacao = Math.floor(Math.random() * 1000);

  if (rotacao < 250) {
    rotacao = 250;
  }

  console.log(rotacao);

  return (
    <>
      <div className="main_text">
        <p>Quiz Café</p>
      </div>

      <img className="icone-click" src={ClickIcon} alt="Ícone de Clique" />

      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="#FCF4F7"
        contrastColor="white"
        buttonText=""
        isOnlyOnce={false}
        size={260}
        upDuration={rotacao}
        downDuration={1200}
        fontFamily="Arial"
      />
      <div className="left_img">
        <img src={logo_educampo} alt="Logo Educampo" />
      </div>
      <div className="right_img">
        <img src={MarcaSebrae} alt="Logo Sebrae" />
      </div>
    </>
  );
};

export default App;
