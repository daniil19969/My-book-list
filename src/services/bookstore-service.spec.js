import { shallow } from "enzyme";
import React from "react";
import BookstoreService from "./bookstore-service";
describe("BookstoreService component", () => {
    it("shallow BookstoreService", () => {
        const component = shallow(<BookstoreService />);
        expect(component).toMatchSnapshot();
    });
});
