import { useState, useEffect } from 'react';
import styles from './Cantores.module.css';

function Cantores() {
  const [grupos, setCantores] = useState([]);
  const url = `https://raw.githubusercontent.com/mateusrick/apicelebridades2023/main/famosos.json`;

  useEffect(() => {
    const bucasCantores = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const cantores = data.filter((grupo) => grupo.grupo === 'CANTORES');

      setCantores(cantores);
    };
    bucasCantores();
  }, [url]);

  return (
    <section className={styles.famosos} >
      {grupos.map((grupo) => (
        <div key={grupo.grupo} className={styles.grupo}>
          <h2>{grupo.grupo}</h2>
          <div>
            {grupo.famosos.map((famoso) => (
              <div key={famoso.nome} className={styles.famoso}>
                <h3>{famoso.nome}</h3>
                <p className={styles.idade}>Idade: {famoso.idade} </p>
                <p className={styles.nascimento}>Data de Nascimento: {famoso.nascimento}</p>
                <p className={styles.premios}>Premios  : {famoso.premios}</p>
                <img className={styles.imagem} src={`/famosos/${famoso.imagem}.jpg`} alt={famoso.grupo} />

              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cantores;
