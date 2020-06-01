import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigtionItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItem />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it("should render two elments if not auth", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it("should render three elments if  auth", () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("have logout", () => {
    wrapper.setProps({ isAuth: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout"> Logout</NavigationItem>)
    ).toEqual(true);
  });
});
