import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("render hello world as  text", () => {
    render(<Greeting />);

    const helloWroldElement = screen.getByText("Hello world!");
    expect(helloWroldElement).toBeInTheDocument();
  });

  test("renders 'text not Changed!' if button is Not Clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("text not Changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'text Changed!' if button is Clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("text Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("not renders 'text not Changed!' if button is Clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("text not Changed!", {
      exact: false,
    });
    expect(outputElement).not.toBeInTheDocument();
  });
});
