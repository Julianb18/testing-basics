import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Form tests", () => {
  test("inputs should be initially empty", () => {
    render(<Form />);
    const emailInputElement = screen.getByRole("textbox");
    expect(emailInputElement.value).toBe("");
  });
});
