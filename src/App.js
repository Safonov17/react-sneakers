import Card from './components/Card'
import Header from './components/Header'
import Cart from './components/Cart'
import React from 'react'

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://634d09bcf5d2cc648e9a9b4f.mockapi.io/products').then((res) => {
      return res.json();
    }).then((json) => {
      setProducts(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartProducts(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Cart products={cartProducts} onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className="title-box">
          <h1 className="section-title">{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <form>
            <img src="/img/search.png" alt="" />
            <input onChange={onChangeSearchInput} value={searchValue} class="search" placeholder="Поиск ..." />
          </form>
        </div>
        <div className="sneakers">

          {products
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                imgURL={item.imgURL}
                addToFavrites={() => console.log('Добавили в избранное')}
                addToBasket={(obj) => onAddToCart(obj)}
              />
            ))}

        </div>
      </div>
    </div>
  );
}

export default App;
