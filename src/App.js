import Card from './components/Card'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header/Header'

const arr = [
  {
    id: 1,
    tittle: 'Мужские Кроссовки Nike Blazer Mid Suede',
    imageUrl: '/img/sneakers/1.jpg',
    price: 12999,
  },
  {
    id: 2,
    tittle: 'Мужские Кроссовки Nike Air Max 270',
    imageUrl: '/img/sneakers/2.jpg',
    price: 12999,
  },
  {
    id: 3,
    tittle: 'Мужские Кроссовки Nike Blazer Mid Suede',
    imageUrl: '/img/sneakers/3.jpg',
    price: 8499,
  },
  {
    id: 4,
    tittle: 'Кроссовки Puma X Aka Boku Future Rider',
    imageUrl: '/img/sneakers/4.jpg',
    price: 8999,
  },
  {
    id: 5,
    tittle: 'Мужские Кроссовки Under Armour Curry 8',
    imageUrl: '/img/sneakers/5.jpg',
    price: 15199,
  },
  {
    id: 6,
    tittle: 'Мужские Кроссовки Nike Kyrie 7',
    imageUrl: '/img/sneakers/6.jpg',
    price: 11299,
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {arr.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
