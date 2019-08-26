import React from 'react'
import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'

import LoginSrc from '../../assets/login.svg'
import ExitSrc from '../../assets/exit.svg'
import Logo from '../../assets/logo.svg'
// import BooksSrc from '../../assets/books.svg'
// import TrashSrc from '../../assets/trash.svg'

// import {
//     Nav,
//     Logotype,
//     Search,
//     SearchInput,
//     SearchButtonWrap,
//     SearchButtonWrapContent,
//     Icons,
//     IconText
// } from './Navbar.style'

import {
    Nav,
    Logos,
    Icons,
    LogosIcon,
    IconText,
    LogosDesc
} from './Navbar.style'

const Navbar = ({
    logout,
    showModal,
    authorized,
}) => {
    return (
        <Nav>
            <Link to="/">
                <Logos>
                    <LogosIcon src={Logo} alt="logotype" />
                    <LogosDesc>React</LogosDesc>
                </Logos>
            </Link>
            {/* <Search>
                <SearchInput />
            </Search>
            <SearchButtonWrap>
                <SearchButtonWrapContent></SearchButtonWrapContent>
            </SearchButtonWrap> */}
            {
                authorized
                    ?
                    (
                        !logout
                            ?
                            <Link to="/admin/products">
                                <Icons enter={true} >
                                    <ReactSVG src={LoginSrc}/>
                                    <IconText>Войти</IconText>
                                </Icons>
                            </Link>
                            :
                            <Icons onClick={logout}>
                                <ReactSVG src={ExitSrc} />
                                <IconText>Выйти</IconText>
                            </Icons>
                    )
                    :
                    <Icons onClick={showModal} enter={true} >
                        <ReactSVG src={LoginSrc} />
                        <IconText>Войти</IconText>
                    </Icons>
            }
            {/* <Icons>
                <ReactSVG src={BooksSrc} />
                <IconText>Книги</IconText>
            </Icons>
            <Icons>
                <ReactSVG src={TrashSrc} />
                <IconText>Корзина</IconText>
            </Icons> */}
        </Nav>
    )
}

export default Navbar