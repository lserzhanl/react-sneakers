function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
            onClick={onClose}
          />
        </h2>
        <div className="items">
          {items.map((obj) => {
            return (
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.tittle}</p>
                  <b>{obj.price} тг.</b>
                </div>
                <div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Drawer
