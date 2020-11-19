import React from "react";
import SearchTitle from "./search-title";
import SearchAuthor from "./search-author";
import SearchGenre from "./search-genre";
describe("Search component", () => {

it("should render component SearchTitle", () => {
    const mockFn = jest.fn();
    const input = shallow(<SearchTitle placeholder=""  onSearch={mockFn}/>);
    input.find('input').simulate('change', {target: {value: 'matched'} });
    expect(mockFn).toBeCalledWith(value);
});

it("should render component SearchAuthor", () => {
    const mockFn = jest.fn();
    const input = shallow(<SearchAuthor placeholder=""  onSearch={mockFn}/>);
    input.find('input').simulate('change', {target: {value: 'matched'} });
    expect(mockFn).toBeCalledWith(value);
});

it("should render component SearchGenre", () => {
    const mockFn = jest.fn();
    const input = shallow(<SearchGenre placeholder=""  onSearch={mockFn}/>);
    input.find('input').simulate('change', {target: {value: 'matched'} });
    expect(mockFn).toBeCalledWith(value);
});

});