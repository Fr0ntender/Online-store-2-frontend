import React from 'react'

import {
    Container,
    Row,
    Col,
} from '../../styles/greed.style'

import Navbar from '../../components/Navbar'
import AdminMenu from '../../composables/AdminMenu'
import ProductTable from '../../components/ProductTable'

const Products = ({ 
    logout,
    history,
    cardData,
    authorized,
    delateData,
    searchActive,
 }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar logout={logout} 
                        authorized={authorized}
                     />
                </Col>
            </Row>
            <Row mt="30">
                <Col set="2">
                    <AdminMenu />
                </Col>
                <Col set="10">
                    <ProductTable 
                        data={cardData}
                        sortState={history.location}
                        searchActive={searchActive}
                        delateData={delateData}/>
                </Col>
            </Row>
        </Container>
    )
}
export default Products