# Shopping Cart Library

This is a TypeScript library for managing a shopping cart functionality in your applications. It provides reusable components for building a shopping cart interface, including the ability to add, update, and remove items.

## Components

- **Cart**: Manages the shopping cart's state and provides methods to manipulate the cart.
- **CartItem**: Represents an individual item in the cart.
- **InputText**: A customizable text input field.
- **Button**: A customizable button component.
- **Modal**: A modal dialog for displaying content.
- **Card**: A card UI element for presenting information.

## Installation

To install the library, use npm:

```
npm install shopping-cart-library
```

## Usage

Here is an example of how to use the components in your project:

```tsx
import { Cart, CartItem, InputText, Button, Modal, Card } from 'shopping-cart-library';

// Example usage of Cart
const myCart = new Cart();
myCart.addItem({ id: 1, name: 'Product 1', price: 100 });

// Render CartItem
<CartItem item={myCart.getItems()[0]} onRemove={() => myCart.removeItem(1)} />

// Render InputText
<InputText value={someValue} placeholder="Enter text" onChange={handleChange} />

// Render Button
<Button label="Add to Cart" onClick={handleAddToCart} />

// Render Modal
<Modal visible={isModalVisible} content={<div>Modal Content</div>} onClose={handleClose} />

// Render Card
<Card title="Product Title" content="Product Description" actions={<Button label="Buy Now" onClick={handleBuyNow} />} />
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.