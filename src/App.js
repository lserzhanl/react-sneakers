import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  React.useEffect(() => {
    // fetch('https://641f3992f228f1a83eb3063b.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setItems(json));

    axios
      .get('https://641f3992f228f1a83eb3063b.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get('https://641f3992f228f1a83eb3063b.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://641f3992f228f1a83eb3063b.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    // axios.delete(`https://641f3992f228f1a83eb3063b.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const fnCartOpened = () => {
    setCartOpened(true);
  };

  const fnCloseCart = () => {
    setCartOpened(false);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={fnCloseCart} items={cartItems} onRemove={onRemoveItem}/>}
      <Header onClickCart={fnCartOpened} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск ..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.tittle.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
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
  );
}

export default App;
