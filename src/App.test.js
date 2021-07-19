// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
  test("renders Home component", () => {
    render(<Home />);
  });
  test("renders Pokemon component", () => {
    render(<Pokemon name="bulbasaur" />);
  });
});

describe("renders Home component to test buttons", () => {
  test("Prev", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("Prev")).toBeDisabled();
  });
  test("Next", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("Next").getAttribute("disabled")).toBe("");
  });
});

describe("renders Home component to test Prev buttons", () => {
  test("enable prev button", () => {
    const { getByTestId } = render(<Home />);
    fireEvent.click(getByTestId("Next"));
    expect(getByTestId("Prev").getAttribute("disabled")).toBe("");
  });
});
