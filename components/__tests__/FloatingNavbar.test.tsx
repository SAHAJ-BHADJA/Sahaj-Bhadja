import { render, screen } from "@testing-library/react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

describe("FloatingNav", () => {
  it("renders navigation items", () => {
    const items = [
      { name: "About", link: "#about" },
      { name: "Projects", link: "#projects" },
    ];

    render(<FloatingNav navItems={items} />);

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});

