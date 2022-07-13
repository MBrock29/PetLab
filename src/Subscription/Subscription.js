import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export const Subscription = ({ setSubscription, subscription }) => {
  const handleSelect = () => {
    if (subscription === "true") {
      setSubscription(null);
    } else {
      setSubscription("true");
    }
  };

  return (
    <div>
      <h3>Filter by Tag</h3>
      <div>
        <Form>
          <Form.Group>
            <Form.Check
              inline
              label="True"
              name="Subscription"
              checked={subscription === "true"}
              onChange={(e) => handleSelect(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
