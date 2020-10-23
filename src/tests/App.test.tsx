import React from "react";
import { render } from "@testing-library/react";
import VisionApp from "../VisionApp";

test("renders learn react link", () => {
    const { getByText } = render(<VisionApp />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
