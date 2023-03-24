import { useState } from "react"
import styles from './Card.module.scss'

function Card({ tittle, imageUrl, price }) {
  const [unLiked, liked] = useState('/img/unLiked.svg')

  function clickLiked() {
    return alert('like clicked')
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={unLiked} alt="Unliked" onClick={clickLiked} />
        {/* <img src="/img/unliked.svg" alt="Unliked" /> */}
      </div>
      <img
        width={133}
        height={112}
        src={imageUrl}
        alt="Nike Blazer Mid Suede"
      />
      <h5>{tittle}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  )
}

export default Card
