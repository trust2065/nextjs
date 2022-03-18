import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Home
        allPostsData={[
          {
            id: "1",
            title: "first post",
            date: "2022-03-16",
            contentHtml: "html",
          },
        ]}
      />
    );

    const heading = screen.getByRole("heading", {
      name: /blog/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
