import Menu from 'components/Menu';
import Cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Pratos';


export default function Inicio() {

  let pratosRecomendados = [...Cardapio];
  const navigate = useNavigate();

  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random())
    .splice(0, 3);

  function redirecionar(pratos: Prato) {
    navigate(`/prato/${pratos.id}`, { state: { pratos }, replace: true });
  }

  return (
    <section>

      <h3 className={styles.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <button
                className={styles.recomendado__botao}
                onClick={() => redirecionar(item)}
              >
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className={styles.titulo}> Nossa casa </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua teste, 1212 <br /> <br /> Primeira avenida - BA
        </div>
      </div>
    </section>
  );
}