import Card from './components/Card'
import Header from './components/Header'
import Cart from './components/Cart'

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imgURL: './img/sneakers/1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 8499,
    imgURL: './img/sneakers/2.jpg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imgURL: './img/sneakers/3.jpg'
  },
  {
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    imgURL: './img/sneakers/5.jpg'
  }
]

function App() {
  return (
    <div className="wrapper clear">

      <Cart />

      <Header />

      <div className="content">
        <div className="title-box">
          <h1 className="section-title">Все кроссовки</h1>
          <form>
            <img src="/img/search.png" alt="" />
            <input class="search" placeholder="Поиск ..." />
          </form>
        </div>
        <div className="sneakers">

          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgURL={obj.imgURL}
              onClick={() => console.log(obj)}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
