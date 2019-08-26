import React from 'react'

import {
    BayButton1
} from '../../styles/button.style'

import {
    CardWrap,
    CardImgWrap,
    CardPriceWrap,
    CardPrice,
    CardDescWrap,
    CardDesc,
    CardStarWrap,
    CardStarElemWrap,
    CardStarElem,
    CardStarElemWrapQuont,
    CardAvtor,
    CardAvtorName,
    Bay
} from './Card.style'

const Card = ({
    productImg,
    productName,
    productVote,
    productYear,
    productPrice,
    productRating,
    productLastName,
    productFirstName,
}) => {
    return (
        <CardWrap>
            <CardImgWrap>
                <img src={productImg.fileUrl} alt={productName} width="158" height="250" />
            </CardImgWrap>
            <CardPriceWrap>
                <CardPrice>{productPrice} ₽</CardPrice>
            </CardPriceWrap>
            <CardDescWrap>
                <CardDesc>{productName}</CardDesc>
            </CardDescWrap>
            <CardStarWrap>
                <CardStarElemWrap>
                    <CardStarElem rating={productRating} />
                </CardStarElemWrap>
                <CardStarElemWrapQuont>{productVote}</CardStarElemWrapQuont>
            </CardStarWrap>
            <CardAvtor>
                <CardAvtorName>{`${productFirstName} ${productLastName}`}</CardAvtorName>
            </CardAvtor>
            <CardAvtor>
                <CardAvtorName>{productYear}</CardAvtorName>
            </CardAvtor>
            <Bay>
                <BayButton1>В корзину</BayButton1>
            </Bay>
        </CardWrap>
    )
}

export default Card