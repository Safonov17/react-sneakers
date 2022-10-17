function Cart({ onClose, products = [] }) {
    return (
        <div className="cart">
            <div className="right-side">
                <div className="title-block">
                    <h2 className="cart__title section-title">Корзина</h2>
                    <img onClick={onClose} src="/img/btn-remove.svg" alt="Close" />
                </div>
                <ul className="cart__list">
                    {products.map((obj) =>
                    (
                        <li className="cart__item">
                            <img className="cart__item-image" src={obj.imgURL} alt="Sneakers" />
                            <div className="cart__item-descr">
                                <span className="cart__item-text">{obj.title}</span>
                                <span className="cart__item-price">{obj.price} руб.</span>
                            </div>
                            <img className="cart__item-remove" src="/img/btn-remove.svg" alt="Remove" />
                        </li>
                    )
                    )}
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