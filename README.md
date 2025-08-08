# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Testing Setup

This project includes a comprehensive testing setup using:

- **Vitest** - Fast unit testing framework
- **React Testing Library** - Testing utilities for React components
- **Happy DOM** - Browser environment simulation
- **@testing-library/jest-dom** - Custom matchers for DOM testing

### Test Configuration

The testing setup is configured in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/setupTests.ts"],
    globals: true,
  },
});
```

### Test Setup File

The `src/setupTests.ts` file imports necessary testing utilities:

```typescript
import "@testing-library/jest-dom";
```

## Descripe what happened in Pizza Component Testing

The `src/__tests__/Pizza.test.tsx` file demonstrates comprehensive component testing. Here's what each test covers:

### Test Structure

```typescript
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Pizza from "../Components/Pizza/Pizza";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

describe("Pizza Component", () => {
  // Individual tests here...
});
```

### Test Cases Explained

#### 1. **Component Rendering Test**

```typescript
it("renders without crashing", () => {
  render(<Pizza />);
  expect(screen.getByText("Pizza")).toBeInTheDocument();
});
```

- **Purpose**: Ensures the component renders without throwing errors
- **What it tests**: Basic component mounting and text presence
- **Why it's important**: Catches fundamental rendering issues

#### 2. **Heading Verification Test**

```typescript
it("displays the correct heading", () => {
  render(<Pizza />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("Pizza");
});
```

- **Purpose**: Verifies the correct heading structure
- **What it tests**: Semantic HTML structure (h1 element)
- **Why it's important**: Ensures accessibility and proper document structure

#### 3. **Image Presence Test**

```typescript
it("renders the pizza image", () => {
  render(<Pizza />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});
```

- **Purpose**: Confirms the image element exists
- **What it tests**: Basic image rendering
- **Why it's important**: Ensures visual content is present

#### 4. **Image Attributes Test**

```typescript
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
```

- **Purpose**: Validates all image properties
- **What it tests**:
  - Correct image source URL
  - Alt text for accessibility
  - CSS class for styling
- **Why it's important**: Ensures proper image configuration and accessibility

#### 5. **Image Source URL Test**

```typescript
it("renders the image with the correct source URL", () => {
  render(<Pizza />);
  const image = screen.getByAltText("pizza") as HTMLImageElement;
  expect(image.src).toBe(
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
  );
});
```

- **Purpose**: Specifically tests the image source
- **What it tests**: Exact URL matching
- **Why it's important**: Ensures the correct image is loaded

#### 6. **CSS Class Test**

```typescript
it("has the correct CSS class on the image", () => {
  render(<Pizza />);
  const image = screen.getByAltText("pizza");
  expect(image).toHaveClass("pizza-img");
});
```

- **Purpose**: Verifies styling classes
- **What it tests**: CSS class application
- **Why it's important**: Ensures proper styling is applied

#### 7. **Component Integration Test**

```typescript
it("renders both heading and image", () => {
  render(<Pizza />);

  const heading = screen.getByText("Pizza");
  const image = screen.getByAltText("pizza");

  expect(heading).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
```

- **Purpose**: Tests component as a whole
- **What it tests**: Integration of all elements
- **Why it's important**: Ensures the complete component works together

### Key Testing Concepts Demonstrated

1. **Accessibility Testing**: Using `getByRole` and `getByAltText` for semantic queries
2. **Type Safety**: Using TypeScript casting (`as HTMLImageElement`) for proper typing
3. **Cleanup**: Using `afterEach(cleanup)` to prevent test interference
4. **Multiple Assertions**: Testing different aspects of the same element
5. **Semantic Queries**: Preferring role-based queries over text-based ones

### Running Tests

```bash
npm test
```

This will run all tests in watch mode, automatically re-running when files change.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
