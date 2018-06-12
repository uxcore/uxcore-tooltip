import expect from "expect.js";
import React from "react";
import ReactDOM from "react-dom";
import TestUtils, { Simulate } from "react-dom/test-utils";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tooltip from "../src";

Enzyme.configure({
  adapter: new Adapter()
});

describe("Tooltip", () => {
  it("render", () => {
    mount(
      <Tooltip
        placement="left"
        trigger={["click"]}
        overlay={<span>tooltip</span>}
      >
        <a href="#">hover</a>
      </Tooltip>
    );
  });
});
