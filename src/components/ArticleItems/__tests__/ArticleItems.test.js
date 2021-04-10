import { render } from "@testing-library/react";
import ArticleItems from "../index";

test("render", () => {
  render(<ArticleItems title="text" time={1234} comments={100} url="http" />);
});
