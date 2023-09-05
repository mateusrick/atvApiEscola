import { useState, useEffect } from 'react';
import styles from './AtoresMirins.module.css';

function AtoresMirins() {
  const [grupos, setCantores] = useState([]);
  const url = `https://raw.githubusercontent.com/mateusrick/apicelebridades2023/main/famosos.json`;

  useEffect(() => {
    const bucasCantores = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const cantores = data.filter((grupo) => grupo.grupo === 'ATORESMIRINS');

      setCantores(cantores);
    };
    bucasCantores();
  }, [url]);

  return (
    <section className={styles.famosos}>
      {grupos.map((grupo) => (
        <div key={grupo.grupo} className={styles.grupo}>
          <h2>{grupo.grupo}</h2>
          <div>
            {grupo.famosos.map((famoso) => (
              <div key={famoso.nome} className={styles.famoso}>
                <h3>{famoso.nome}</h3>
                <p>Idade: {famoso.idade}</p>
                <p>Data de Nascimento: {famoso.nascimento}</p>
                {/* Adicione mais informações conforme necessário */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default AtoresMirins;
