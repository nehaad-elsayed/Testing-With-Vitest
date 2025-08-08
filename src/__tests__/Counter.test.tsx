import { describe, it, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Counter from "../Components/Counter/Counter";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

describe("Counter Component", () => {
  it("renders without crashing", () => {
    render(<Counter />);
    expect(screen.getByText("Counter")).toBeInTheDocument();
  });

  it("displays the correct initial count", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("displays the correct heading", () => {
    render(<Counter />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Counter");
  });

  it("renders all three buttons", () => {
    render(<Counter />);
    expect(screen.getByText("Decrease")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("Increase")).toBeInTheDocument();
  });

  it("increments count when Increase button is clicked", () => {
    render(<Counter />);
    const increaseButton = screen.getByText("Increase");

    fireEvent.click(increaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(increaseButton);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("decrements count when Decrease button is clicked", () => {
    render(<Counter />);
    const decreaseButton = screen.getByText("Decrease");

    fireEvent.click(decreaseButton);
    expect(screen.getByText("-1")).toBeInTheDocument();

    fireEvent.click(decreaseButton);
    expect(screen.getByText("-2")).toBeInTheDocument();
  });

  it("resets count to zero when Reset button is clicked", () => {
    render(<Counter />);
    const increaseButton = screen.getByText("Increase");
    const resetButton = screen.getByText("Reset");

    // First increment a few times
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(screen.getByText("2")).toBeInTheDocument();

    // Then reset
    fireEvent.click(resetButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("handles multiple operations correctly", () => {
    render(<Counter />);
    const increaseButton = screen.getByText("Increase");
    const decreaseButton = screen.getByText("Decrease");
    const resetButton = screen.getByText("Reset");

    // Increment twice
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(screen.getByText("2")).toBeInTheDocument();

    // Decrement once
    fireEvent.click(decreaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    // Reset
    fireEvent.click(resetButton);
    expect(screen.getByText("0")).toBeInTheDocument();

    // Decrement to negative
    fireEvent.click(decreaseButton);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("has correct button styling classes", () => {
    render(<Counter />);
    const decreaseButton = screen.getByText("Decrease");
    const resetButton = screen.getByText("Reset");
    const increaseButton = screen.getByText("Increase");

    expect(decreaseButton).toHaveStyle({ backgroundColor: "#f44336" });
    expect(resetButton).toHaveStyle({ backgroundColor: "#2196F3" });
    expect(increaseButton).toHaveStyle({ backgroundColor: "#4CAF50" });
  });
});
