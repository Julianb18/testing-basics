import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Input } from "./Input";

describe("Input Component", () => {
  it("rendered input", () => {
    //   one way of doing it but we get an error saying we avoid destructuring queries from `render` result.
    // const { getByTestId } = render(<Input isVisible={false} />);
    // const input = getByTestId("searchBar");

    // so instead this way is preferred
    render(<Input isVisible={false} />);
    const input = screen.getByTestId("searchBar");
    expect(input).toBeTruthy();
  });

  it("renders the paragraph", () => {
    render(<Input isVisible={true} />);
    const p = screen.getByTestId("shownText");
    expect(p).toBeTruthy();
  });

  // since isVisible is false the paragraph wont be rendered
  // in the dom therefore we have to use queryByTestId instead
  // of getByTestId
  it("does not render paragraph", () => {
    render(<Input isVisible={false} />);
    const p = screen.queryByTestId("shownText");
    expect(p).toBeFalsy();
  });

  // if you have a state indside the component that will
  //  change throughput the test then wrap it in act
  //   make function async so that event fires before checking
  // if innerHtml has been updated
  it("updates header on input change", async () => {
    await act(async () => {
      render(<Input isVisible={true} />);
      const input = screen.getByTestId("searchBar");
      const header = screen.getByTestId("displaySearch");
      const inputWord = "Random test";
      // simulate events in your app
      await fireEvent.change(input, { target: { value: inputWord } });
      expect(header.innerHTML).toBe(inputWord);
    });
  });
});
