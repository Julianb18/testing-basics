import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Todo } from "./Todo";

afterEach(() => {
  cleanup();
});

describe("Todo", () => {
  test("should render incomplete todo", () => {
    const todo = { id: 1, title: "wash dishes", completed: false };
    render(<Todo todo={todo} />);
    // const todoElement = screen.getByTestId(1);
    const todoElement = screen.getByText("wash dishes");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash dishes");
    expect(todoElement).not.toHaveClass("line-through");
  });

  test("should render completed todo", () => {
    const todo = { id: 2, title: "eat", completed: true };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId(2);
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("eat");
    // expect(todoElement).toHaveClass("line-through");
  });
});

// snapShots
// dont need these
test("matches snapshot", () => {
  const todo = { id: 2, title: "eat", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  //   console.log(tree);
  expect(tree).toMatchSnapshot();
});

// jest mock
