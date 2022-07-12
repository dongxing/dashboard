import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders coming soon text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Wah Gwan, Soon Come/i);
  expect(linkElement).toBeInTheDocument();
});
