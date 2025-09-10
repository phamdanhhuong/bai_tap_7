import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Cart from "./components/Cart";
import CartItem from "./components/CartItem";
import InputText from "./components/InputText";
import Modal from "./components/Modal";
import { CartItemType } from "./types";
import "./ExamplePage.css";

const ExamplePage: React.FC = () => {
  // State for input text examples
  const [textValue, setTextValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // State for modal example
  const [isModalVisible, setIsModalVisible] = useState(false);

  // State for cart examples
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    { id: "1", name: "MacBook Pro", price: 1999.99, quantity: 1 },
    { id: "2", name: "iPhone 15", price: 999.99, quantity: 2 },
    { id: "3", name: "AirPods Pro", price: 249.99, quantity: 1 },
  ]);

  // Cart instance
  const cart = new Cart();

  // Event handlers
  const handleAddItem = () => {
    const newItem: CartItemType = {
      id: Math.random().toString(36).substr(2, 9),
      name: `Product ${cartItems.length + 1}`,
      price: Math.floor(Math.random() * 500) + 50,
      quantity: 1,
    };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleButtonClick = (message: string) => {
    alert(message);
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "40px",
      padding: "20px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      backgroundColor: "#fafafa",
    },
    sectionTitle: {
      color: "#333",
      borderBottom: "2px solid #007bff",
      paddingBottom: "10px",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      marginBottom: "20px",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap" as const,
      marginBottom: "20px",
    },
    inputGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    cartTotal: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#007bff",
      marginTop: "20px",
    },
  };

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "40px" }}>
        Shopping Cart Library - Component Examples
      </h1>

      {/* Button Examples */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Button Component</h2>
        <p>
          Demonstrates the Button component with different styles and actions.
        </p>
        <div style={styles.buttonGroup}>
          <Button
            label="Primary Button"
            onClick={() => handleButtonClick("Primary button clicked!")}
          />
          <Button
            label="Success Button"
            onClick={() => handleButtonClick("Success!")}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
            }}
          />
          <Button
            label="Danger Button"
            onClick={() => handleButtonClick("Danger action!")}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
            }}
          />
          <Button
            label="Open Modal"
            onClick={() => setIsModalVisible(true)}
            style={{
              backgroundColor: "#17a2b8",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
            }}
          />
        </div>
      </section>

      {/* InputText Examples */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>InputText Component</h2>
        <p>Shows different input text fields for user interaction.</p>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Basic Input:</label>
          <InputText
            value={textValue}
            placeholder="Enter some text..."
            onChange={(e) => setTextValue(e.target.value)}
          />
          <p>Current value: {textValue}</p>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Search Input:</label>
          <InputText
            value={searchValue}
            placeholder="Search products..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <p>Search query: {searchValue}</p>
        </div>
      </section>

      {/* Card Examples */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Card Component</h2>
        <p>Displays content in card format with different configurations.</p>
        <div style={styles.grid}>
          <Card
            title="Product Information"
            content={
              <div>
                <p>
                  This is a sample product card showing how content can be
                  displayed.
                </p>
                <p>
                  <strong>Price:</strong> $299.99
                </p>
                <p>
                  <strong>Stock:</strong> Available
                </p>
              </div>
            }
            actions={
              <Button
                label="Add to Cart"
                onClick={handleAddItem}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                }}
              />
            }
          />
          <Card
            title="User Profile"
            content={
              <div>
                <p>
                  <strong>Name:</strong> John Doe
                </p>
                <p>
                  <strong>Email:</strong> john@example.com
                </p>
                <p>
                  <strong>Member since:</strong> 2024
                </p>
              </div>
            }
          />
          <Card
            title="Statistics"
            content={
              <div>
                <p>
                  <strong>Total Orders:</strong> {cartItems.length}
                </p>
                <p>
                  <strong>Total Value:</strong> ${total.toFixed(2)}
                </p>
                <p>
                  <strong>Average Order:</strong> $
                  {cartItems.length > 0
                    ? (total / cartItems.length).toFixed(2)
                    : "0.00"}
                </p>
              </div>
            }
            actions={
              <Button
                label="View Details"
                onClick={() =>
                  handleButtonClick("Viewing statistics details...")
                }
                style={{
                  backgroundColor: "#6f42c1",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                }}
              />
            }
          />
        </div>
      </section>

      {/* CartItem Examples */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>CartItem Component</h2>
        <p>Shows individual cart items with remove functionality.</p>
        <div>
          {cartItems.length === 0 ? (
            <p>No items in cart. Click "Add Random Item" to add some!</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onRemove={handleRemoveItem}
              />
            ))
          )}
          <div style={styles.cartTotal}>Total: ${total.toFixed(2)}</div>
          <div style={styles.buttonGroup}>
            <Button
              label="Add Random Item"
              onClick={handleAddItem}
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
              }}
            />
            <Button
              label="Clear Cart"
              onClick={() => setCartItems([])}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </section>

      {/* Modal Example */}
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        content={
          <div style={{ padding: "20px" }}>
            <h3>Modal Example</h3>
            <p>This is a modal dialog showcasing the Modal component.</p>
            <p>You can put any content here including other components:</p>
            <InputText
              value=""
              placeholder="Input inside modal..."
              onChange={() => {}}
            />
            <div style={{ marginTop: "20px" }}>
              <Button
                label="Close Modal"
                onClick={() => setIsModalVisible(false)}
                style={{
                  backgroundColor: "#6c757d",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        }
      />

      {/* Integration Example */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Integration Example</h2>
        <p>
          This section shows how all components can work together in a real
          application.
        </p>
        <Card
          title="Shopping Cart Demo"
          content={
            <div>
              <p>A complete example showing component integration:</p>
              <ul>
                <li>Use the input to search</li>
                <li>Click buttons to add items</li>
                <li>View items in cart format</li>
                <li>Open modals for details</li>
              </ul>
              <InputText
                value={searchValue}
                placeholder="Search for products..."
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          }
          actions={
            <div>
              <Button
                label="Add Product"
                onClick={handleAddItem}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  marginRight: "10px",
                }}
              />
              <Button
                label="View Cart"
                onClick={() => setIsModalVisible(true)}
                style={{
                  backgroundColor: "#17a2b8",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                }}
              />
            </div>
          }
        />
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px",
          color: "#666",
        }}
      >
        <p>Shopping Cart Library v1.0.0 - Component Examples</p>
      </footer>
    </div>
  );
};

export default ExamplePage;
