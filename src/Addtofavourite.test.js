import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Homepage from './components/Homepage';

Enzyme.configure({ adapter: new Adapter() });
describe("Homepage", () => {
  it("should render homepage", () => {
    const wrapper = shallow(<Homepage />);
  });
});