import React from 'react'
import { useState } from 'react'

import Card from './components/Card'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header/Header'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  React.useEffect(() => {
    fetch('https://641f3992f228f1a83eb3063b.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => setItems(json))
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const fnCartOpened = () => {
    setCartOpened(true)
  }

  const fnCloseCart = () => {
    setCartOpened(false)
  }



  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={fnCloseCart} items={cartItems} />}
      <Header onClickCart={fnCartOpened} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              key={item.id}
              {...item}
              onFavorite={() => alert('Add to favorite')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
