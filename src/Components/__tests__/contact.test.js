import { render ,screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";

test("SHould load contact us component" , () => {
     render(<Contact />);

     const header = screen.getByRole("heading") ;

     expect(header).toBeInTheDocument();
})