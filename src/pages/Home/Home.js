import React from 'react'
import { v4 } from "uuid"
import { Transition } from 'react-transition-group'

import {
    Container,
    Row,
    Col,
} from '../../styles/greed.style'

import {
    HeaderH1,
} from '../../styles/typography.style'

// import {
//     List,
//     ListElem,
//     CardRow,
//     CardWrap
// } from './Home.style'

import {
    CardRow,
    CardWrap
} from './Home.style'

import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import Authorize from '../../composables/Authorize'

const Home = ({
    modals,
    cardData,
    showModal,
    authorized,
    findCardData,
    reloadCardData
}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbar 
                            desc={false}
                            authorized={authorized}
                            showModal={showModal}
                            findCardData={findCardData}
                            reloadCardData={reloadCardData}/>
                    </Col>
                </Row>
                <Row mt="30">
                    <Col set="2">
                        {/* <aside>
                            <List>
                                <ListElem>Художественная литература</ListElem>
                                <ListElem>Бизнес-литература</ListElem>
                                <ListElem>Нехудожественная литература</ListElem>
                            </List>
                        </aside> */}
                    </Col>
                    <Col set="10">
                        <HeaderH1 mt="0" mb="20">Книги</HeaderH1>
                        <CardRow>
                            {cardData.map(v =>
                                <CardWrap key={v4()}>
                                    <Card
                                        key={v4()}
                                        productImg={v.productImg}
                                        productName={v.productName}
                                        productVote={v.productVote}
                                        productYear={v.productYear}
                                        productAutor={v.productAutor}
                                        productPrice={v.productPrice}
                                        productRating={v.productRating}
                                        productLastName={v.productLastName}
                                        productFirstName={v.productFirstName}
                                    />
                                </CardWrap>
                            )}
                        </CardRow>
                    </Col>
                </Row>
            </Container>
            <Transition in={modals} timeout={400} unmountOnExit={true}>{state => <Authorize state={state} />}
            </Transition >
        </div>
    )
}
export default Home