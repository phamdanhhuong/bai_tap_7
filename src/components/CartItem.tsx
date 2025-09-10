import React from 'react';

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
    onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, onRemove }) => {
    return (
        <div className="cart-item">
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => onRemove(id)}>Remove</button>
        </div>
    );
};

export default CartItem;