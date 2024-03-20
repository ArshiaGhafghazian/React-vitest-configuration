import { render, screen } from "@testing-library/react"
import { expect } from "vitest"
import App from "./App.jsx"

test("it should render", () => {
    render(<App />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
})
