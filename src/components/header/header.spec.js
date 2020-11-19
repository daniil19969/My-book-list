import { shallow } from "enzyme";
import React from "react";
import Header from "../header/header";
describe("Header component", () => {
    it("check title by default", () => {
        const header = shallow(<Header />);
        expect(header.find("h1").text()).toEqual("My Book List");
    });
});
