import { useEffect, useState } from 'react'
import styles from './Card.module.css'

function Card() {

    const [ grupos, setGrupos ] = useState([])

    useEffect(() => {
        const buscarGrupos = async () => {
            const response = await fetch('https://raw.githubusercontent.com/mateusrick/apicelebridades2023/main/famosos.json')
            const data = await response.json()
            setGrupos(data)
        }
        buscarGrupos()
    }, [])

    return (
        grupos.map( grupo => 
            <section className={styles.card} key={grupo.grupo} style={{'backgroundColor': grupo.cor}}>
                <div className={styles.linha} style={{'backgroundColor': grupo.cor}}></div>
                <h2> {grupo.grupo}</h2>
                <ul>
                    {
                        grupo.famosos.map( famoso => {
                          return (
                            <li key={famoso.nome}>
                                <img  className={styles.imagem} src={`/famosos/${famoso.imagem}.jpg`} alt={famoso.grupo} />
                                {famoso.nome} 
                            </li>
                            ) 
                        })
                    }
                </ul>
            </section>
        )
    )
}

export default Card
