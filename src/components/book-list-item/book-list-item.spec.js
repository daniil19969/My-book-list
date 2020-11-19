import React from "react";
import BookListItem from "./book-list-item";
import DummyBookstoreService from '../../services/dummy-bookstore-service'
describe("BookListItem component", () => {
  it("should render component BookListItem", () => {
    const wrapper = shallow(<BookListItem book={DummyBookstoreService}/>);
    expect(wrapper).toMatchSnapshot();
  });
});