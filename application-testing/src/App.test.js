import React from "react";
import * as RTL from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./components/Dashboard";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/ball/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("strike button clicks", () => {
  const { getByText } = RTL.render(<Dashboard />);
  RTL.fireEvent.click(getByText(/strike/i));
});

test("ball button clicks", () => {
  const { getByText } = RTL.render(<Dashboard />);
  RTL.fireEvent.click(getByText(/ball/i));
});

test("foul button clicks", () => {
  const { getByText } = RTL.render(<Dashboard />);
  RTL.fireEvent.click(getByText(/foul/i));
});

test("hit button clicks", () => {
  const { getByText } = RTL.render(<Dashboard />);
  RTL.fireEvent.click(getByText(/hit/i));
});

test("App renders without crashing", () => {
  RTL.render(<App />);
});
