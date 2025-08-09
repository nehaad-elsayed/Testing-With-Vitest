import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Components/Cart/Cart";


test("snapshot with nothing in the cart", () => {
    const {asFragment} = render(<Cart items={[]}/>);
    expect(asFragment()).toMatchSnapshot();
});

test("snapshot with one item in the cart", () => {
    const {asFragment} = render(<Cart items={["Pizza"]}/>);
    expect(asFragment()).toMatchSnapshot();
});

test("snapshot with multiple items in the cart", () => {
    const {asFragment} = render(<Cart items={["Pizza", "Pasta", "Burger"]}/>);
    expect(asFragment()).toMatchSnapshot();
});



