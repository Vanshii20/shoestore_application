import { render, screen } from "@testing-library/react";
import App from "./App";

test("check store title", () => {
  render(<App />);
  const text = screen.getByText(/shoe store/i);
  expect(text).toBeInTheDocument();
});
