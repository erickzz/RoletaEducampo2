import { useParams, Link } from 'react-router-dom';
import { Perguntas } from '../perguntas';
//import LogoVarejoBranco from '../assets/Logo_Varejo_Branco.png';
import MarcaSebraeBranca from '../assets/marca-sebrae-branca.png';
import PerguntaCard from '../components/PerguntaCard';

export default function PaginaPerguntas() {
  const { tema } = useParams();

  let corTema = '';

  if (tema === 'Inova 1') {
    corTema = '#045bbc';
  } else if (tema === 'Inova 2') {
    corTema = '#04949c';
  } else {
    corTema = '#5c7c2c';
  }

  /* if (botaoVoltar.style.backgroundColor === '#fff') {
    console.log('NSDFHDSIFDSJI');
  } */

  const pergunta = Perguntas.filter((pergunta) => pergunta.tema === tema);
  //console.log(pergunta);
  const perguntaSelecionada =
    pergunta[Math.floor(Math.random() * pergunta.length)];
  //console.log(perguntaSelecionada);
  const perguntasAleatorizadas = perguntaSelecionada.alternativas.sort(
    (a, b) => 0.5 - Math.random()
  );

  const mouseEnterVoltar = (e) => {
    e.target.style.color = corTema;
  };

  const mouseLeaveVoltar = (e) => {
    e.target.style.color = '#fff';
  };

  return (
    <div className="container_perguntas">
      <div className="pergunta" style={{ backgroundColor: corTema }}>
        <div className="infoPergunta">
          <img src={MarcaSebraeBranca} alt="L=Logo Sebrea Branca" />
          <p>Tema: {tema}</p>
        </div>
        <p className="texto-pergunta">{perguntaSelecionada.pergunta}</p>
        <div className="botao-voltar">
          <Link to="/">
            <button
              onMouseEnter={mouseEnterVoltar}
              onMouseLeave={mouseLeaveVoltar}
            >
              Voltar
            </button>
          </Link>
        </div>
      </div>
      <PerguntaCard
        perguntasAleatorizadas={perguntasAleatorizadas}
        tema={corTema}
      />
    </div>
  );
}
