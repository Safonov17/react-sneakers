function Cart() {
    return (
        <div style={{ display: 'none' }} className="cart">
            <div className="right-side">
                <h2 className="cart__title section-title">Корзина</h2>
                <ul className="cart__list">
                    <li className="cart__item">
                        <img className="cart__item-image" src="/img/sneakers/1.jpg" alt="Sneakers" />
                        <div className="cart__item-descr">
                            <span className="cart__item-text">Мужские Кроссовки Nike Air Max 270</span>
                            <span className="cart__item-price">12 999 руб.</span>
                        </div>
                        <img className="cart__item-remove" src="/img/btn-remove.svg" alt="Button remove" />
                    </li>
                    {/* cart__item 1 */}
                </ul>
                <ul className="cart__total">
                    <li className="cart__total-item">
                        <span className="cart__total-text">Итого:</span>
                        <div></div>
                        <span className="cart__total-value">99 999 руб.</span>
                    </li>
                    <li className="cart__total-item">
                        <span className="cart__total-text">Налог 5%:</span>
                        <div></div>
                        <span className="cart__total-value">99 999 руб.</span>
                    </li>
                </ul>
                <button className="btn cart__btn">
                    <span className="cart__btn-text">Оформить заказ</span>
                    <img className="cart__btn-image" src="/img/arrow-right.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    )
}

export default Cart;