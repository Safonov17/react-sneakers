function Header(props) {
    return (
        <header>
            <div className="headerLeft">
                <img src="/img/logo.png" alt="" />
                <div>
                    <h3>React sneakers</h3>
                    <span>Магазин лучших кроссовок</span>
                </div>
            </div>
            <ul className="headerRight">
                <li onClick={props.onClickCart}>
                    <img src="/img/cart.svg" alt="" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="/img/user.svg" alt="" />
                </li>
            </ul>
        </header>
    )
}

export default Header;