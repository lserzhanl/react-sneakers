import Card from './components/Card/Card'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header/Header'

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
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
