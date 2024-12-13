import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom"; // Import jest-dom matchers

describe("App Component", () => {
  it('should render the title "Vite + React"', () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it('should have an "Increment" button', () => {
    render(<App />);
    expect(screen.getByText("Increment")).toBeInTheDocument();
  });

  it("should increment the count twice after two clicks", async () => {
    render(<App />);
    const button = screen.getByText("Increment");

    fireEvent.click(button);
    fireEvent.click(button);

    // Wait for the updated text
    const countText = await screen.findByText("The current count is: 2");
    expect(countText).toBeInTheDocument();
  });
});
