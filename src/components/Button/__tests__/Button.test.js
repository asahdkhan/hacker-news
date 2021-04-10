import { render } from "@testing-library/react";
import Button from "../index";

test("render", () => {
  render(
    <Button id="123" label="text" styles="className" handleClick={() => null} />
  );
});
