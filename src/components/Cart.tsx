import React, { useState } from 'react';
import { CartItemType } from '../types';

class Cart {
    private items: CartItemType[];

    constructor() {
        this.items = [];
    }

    addItem(item: CartItemType) {
        this.items.push(item);
    }

    updateItem(updatedItem: CartItemType) {
        const index = this.items.findIndex(item => item.id === updatedItem.id);
        if (index !== -1) {
            this.items[index] = updatedItem;
        }
    }

    removeItem(itemId: string) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getItems() {
        return this.items;
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}

export default Cart;