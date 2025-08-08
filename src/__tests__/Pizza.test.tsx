import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Pizza from "../Components/Pizza/Pizza";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

describe("Pizza Component", () => {
  it("renders without crashing", () => {
    render(<Pizza />);
    expect(screen.getByText("Pizza")).toBeInTheDocument();
  });

  it("displays the correct heading", () => {
    render(<Pizza />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Pizza");
  });

  it("renders the pizza image", () => {
    render(<Pizza />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  it("has correct image attributes", () => {
    render(<Pizza />);
    const image = screen.getByRole("img") as HTMLImageElement;

    expect(image).toHaveAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
    );
    expect(image).toHaveAttribute("alt", "pizza");
    expect(image).toHaveClass("pizza-img");
  });

  it("renders the image with the correct source URL", () => {
    render(<Pizza />);
    const image = screen.getByAltText("pizza") as HTMLImageElement;
    expect(image.src).toBe(
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
    );
  });

  it("has the correct CSS class on the image", () => {
    render(<Pizza />);
    const image = screen.getByAltText("pizza");
    expect(image).toHaveClass("pizza-img");
  });

  it("renders both heading and image", () => {
    render(<Pizza />);

    const heading = screen.getByText("Pizza");
    const image = screen.getByAltText("pizza");

    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
