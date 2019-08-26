import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withProps, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'

import { triggerModal } from '../../ducks/modals'
import { addCardData, reloadCardData } from '../../ducks/productCard'

import Home from './Home';

const mapStateToProps = state => ({
    cardData: state.productCard.cardData,
    authorized: state.authorization.authorized,
    modals: state.modals.find(({ name }) => name === 'adminIsOpen').state,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    reloadCardData,
    triggerModal,
    addCardData
}, dispatch)

export const props = ({
    modals,
    cardData,
    authorized,
    addCardData,
    triggerModal,
    reloadCardData,
  }) => ({
    modals,
    cardData,
    authorized,
    addCardData,
    reloadCardData,
    showModal: () => {
        triggerModal({
            name: 'adminIsOpen',
            state: true
        })
    }
  })
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withProps(props),
    withRouter,
    lifecycle({
        UNSAFE_componentWillMount() {
            this.props.reloadCardData()
        }
    })
)(Home)