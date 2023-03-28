import { useState } from 'react'
import styles from './Card.module.scss'

function Card({ tittle, imageUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const onClickPlus = () => { 
    onPlus({tittle, imageUrl, price})
    setIsAdded(!isAdded)
  }

  const onClickLiked = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickLiked}>
        <img
          src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'}
          alt="Like"
        />
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
          <b>{price} тг.</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  )
}

export default Card
