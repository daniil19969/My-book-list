import React from "react";
import App from "./app";

const componentDidMountSpy = jest.spyOn(App.prototype, "componentDidMount");

const setUp = () => shallow(<App />);
describe("App component", () => {

  let component;
  beforeEach(() => {
    jest.spyOn(window, "addEventListener");
    jest.spyOn(window, "removeEventListener");
    component = setUp();
  });

  afterEach(() => {
    window.addEventListener.mockRestore();
    window.removeEventListener.mockRestore();
  });




  it("should render component App", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Lifecycle method", () => {

    it("should call componentDidMount", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(2);
    });
  });

});
