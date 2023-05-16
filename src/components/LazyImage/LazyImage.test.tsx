import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import LazyImage from "./LazyImage";

Enzyme.configure({ adapter: new Adapter() });

const url = "https://images.unsplash.com/photo-1683914791767-764d03299719";
/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<LazyImage {...props} src={url} />);
};

describe("LazyImage component", () => {
  it("should render without errors", () => {
    const wrapper = setup();
    const appComponent = wrapper.find({ "data-test-id": "component-image" });
    expect(appComponent.length).toBe(1);
  });

  it("should render an image with the provided URL if src is provided", () => {
    const wrapper = shallow(<LazyImage src={url} />);
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url + `?w=10`);
  });
  it("should render an image with the provided URL if data-src is provided", () => {
    const wrapper = shallow(<LazyImage src={url} />);
    const img = wrapper.find("img");
    expect(img.prop("data-src")).toBe(url + `?w=1800`);
  });
});
