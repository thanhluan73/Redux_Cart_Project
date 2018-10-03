import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { DeleteProduct, ChangeMessage, UpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
	render() {
		var { cart } = this.props;
		return (
			<Cart>
				{ this.showCartItem(cart) }
				{ this.showTotalMoney(cart) }
			</Cart>
		);
	}
	
	showCartItem = (cart) => {
		var { DeleteProduct, onChangeMessage, onUpdateProductInCart } = this.props;
		var result = <tr>
			<td>{Message.MSG_CART_EMPTY}</td>
		</tr>;
		if(cart.length > 0){
			result = cart.map((item, index) => {
				return (
					<CartItem
						key = { index }
						item = { item }
						index = { index }
						DeleteProduct = {DeleteProduct}
						onChangeMessage = {onChangeMessage}
						onUpdateProductInCart = {onUpdateProductInCart}
					/>
				);
			});
		}
		return result;
	}

	showTotalMoney = (cart) => {
		var result = null;
		if(cart.length > 0){
			result = <CartResult cart={ cart }/>
		}
		return result;
	}
}

CartContainer.propTypes = { 
	cart : PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({
			id : PropTypes.number.isRequired,
			name : PropTypes.string.isRequired,
			image : PropTypes.string.isRequired,
			description : PropTypes.string.isRequired,
			price : PropTypes.number.isRequired,
			inventory : PropTypes.number.isRequired,
			rating : PropTypes.number.isRequired
		}).isRequired,
		quantity: PropTypes.number.isRequired
	})).isRequired,
	DeleteProduct : PropTypes.func.isRequired,
	onChangeMessage : PropTypes.func.isRequired,
	onUpdateProductInCart : PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return {
		cart : state.cart
	}
}

const MapDispatchToProps = (dispatch, props) => {
	return {
		DeleteProduct : (product) => {
			dispatch(DeleteProduct(product));
		},
		onChangeMessage : (message) => {
			dispatch(ChangeMessage(message));
		},
		onUpdateProductInCart : (product, quantity) => {
			dispatch(UpdateProductInCart(product, quantity));
		}
	}
}
export default connect(mapStateToProps, MapDispatchToProps)(CartContainer);
