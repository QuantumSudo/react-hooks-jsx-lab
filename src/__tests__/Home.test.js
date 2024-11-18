// src/__tests__/Home.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { username, city } from "../data/user"; // Corrected the import path
import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  render(<Home />);
  const divElement = screen.getByTestId("home");
  expect(divElement).toBeInTheDocument();
});

test("renders the correct name and city", () => {
  render(<Home />);
  expect(screen.getByText(/Your Name is a Web Developer from/)).toBeInTheDocument();
});
