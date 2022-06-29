import { render, fireEvent } from "@testing-library/react"
import Todo from "../Todos/Todo"

describe("<Todo />", () => {
  test("Should render", () => {
    const todo = {
      _id: "62ba1581461a9a162eb30797",
      text: "Learn about containers",
      done: false
    };

    const onClickComplete = jest.fn();
    const onClickDelete = jest.fn();

    const { getByText } = render((
      <Todo 
        todo={todo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
    ));

    expect(getByText("Learn about containers")).toBeDefined();
    expect(getByText("This todo is not done")).toBeDefined();

    fireEvent.click(getByText("Set as done"));
    expect(onClickComplete).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText("Delete"));
    expect(onClickDelete).toHaveBeenCalledTimes(2);
  
  });
});