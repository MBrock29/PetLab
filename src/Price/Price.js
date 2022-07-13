import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export const Price = ({ setPrice, price }) => {
  const handleSelect = (e) => {
    if (price === e) {
      setPrice(null);
    } else {
      setPrice(e);
    }
  };

  const prices = ["10", "30", "50", "100"];

  const isPriceSelected = (value) => price === value;

  return (
    <div>
      <h3>Filter by Price</h3>
      <div>
        <Form>
          <Form.Group>
            {prices.map((i) => (
              <Form.Check
                inline
                label={`Up to ${i}`}
                name="price"
                value={i}
                checked={isPriceSelected(i)}
                onChange={(e) => handleSelect(e.target.value)}
              />
            ))}
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
