// component for the bout us page.
export default function About() {
  return (
    <div className="container mt-5">
      {/* Header for the About page */}
      <h1 className="mb-4">About Us</h1>

      {/* Section: Our Story */}
      <h2>Our Story</h2>
      <p>
        We started our online store with a simple mission: to provide
        high-quality products at affordable prices. Our team is passionate about
        sourcing the best items and delivering exceptional customer service.
      </p>

      {/* Section: Our Values */}
      <h2>Our Values</h2>
      <ul>
        <li>
          <strong>Customer Satisfaction:</strong> We prioritize our customers'
          happiness and strive to exceed their expectations.
        </li>

        <li>
          <strong>Quality:</strong> We are committed to offering products that
          meet high standards of quality and durability.
        </li>

        <li>
          <strong>Integrity:</strong> We conduct our business with honesty and
          transparency, building trust with our customers.
        </li>
      </ul>

      {/* Section: Contact Us */}
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, please don't hesitate to reach
        out to us. You can contact us at{" "}
        <a href="mailto:info@onlinestore.com">info@onlinestore.com</a>.
      </p>
    </div>
  );
}
