import React from "react";
import BookList from "./book-list";
import DummyBookstoreService from '../../services/dummy-bookstore-service'
describe("BookList component", () => {
  it("should render component BookList", () => {
    const wrapper = shallow(<BookList book={DummyBookstoreService}/>);
    expect(wrapper).toMatchSnapshot();
  });
});