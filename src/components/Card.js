function Card(props) {
    return (
        <div className="card">
            <img className="card__unliked-image" src="/img/heart-unliked.svg" alt="Unliked" />
            <img className="card__image" src={props.imgURL} alt="" />
            <h3 className="card__title">{props.title}</h3>
            <div className="card__price">
                <div className="card__price-content">
                    <span className="card__price-content--text">Цена:</span>
                    <span className="card__price-content--value">{props.price} руб.</span>
                </div>
                <button onClick={props.onClick}>
                    <img className="card__price-append" src="/img/plus.svg" alt="Append" />
                </button>
            </div>
        </div>
    )
}

export default Card;