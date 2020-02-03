import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Users from "./Users";

Enzyme.configure({ adapter: new Adapter() });

const firstUser = {
  id: 1
};

const secondUser = {
  id: 2
};

it("tests toggleButton function to toggle to true", () => {
  let mockResponse = { users: [{ id: 1 }, { id: 2 }] };

  let wrapper = shallow(<Users />);
  wrapper.setState({ ...mockResponse });

  const instance = wrapper.instance();

  instance.toggleButton(firstUser);
  console.log(wrapper.instance().state.users);

  expect(wrapper.instance().state.users[0].isDisplayed).toBe(true);
});

it("checks the Id passed to the state and toggles isDisplayed prop to true", () => {
  let mockResponse = { users: [{ id: 1 }, { id: 2, isDisplayed: true }] };

  let wrapper = shallow(<Users />);
  wrapper.setState({ ...mockResponse });

  const instance = wrapper.instance();

  instance.toggleButton(secondUser);
  console.log(wrapper.instance().state.users);

  expect(wrapper.instance().state.users[1].isDisplayed).toBe(false);
});
