import React from 'react';

function Card({ addToFavorite, imgURL, title, price, addToBasket }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        addToBasket({ title, price, imgURL });
        setIsAdded(!isAdded);
    }

    return (
        <div className="card">
            <img
                className="card__unliked-image"
                onClick={addToFavorite}
                src="/img/heart-unliked.svg"
                alt="Unliked"
            />
            <img className="card__image" src={imgURL} alt="" />
            <h3 className="card__title">{title}</h3>
            <div className="card__price">
                <div className="card__price-content">
                    <span className="card__price-content--text">Цена:</span>
                    <span className="card__price-content--value">{price} руб.</span>
                </div>
                <img
                    className="card__price-append"
                    onClick={onClickPlus}
                    src={isAdded ? '/img/added.svg' : '/img/plus.svg'}
                    alt="Append"
                />
            </div>
        </div >
    )
}

export default Card;