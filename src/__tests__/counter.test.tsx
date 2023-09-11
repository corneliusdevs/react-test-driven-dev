import "@testing-library/jest-dom"
import Counter from "../../src/components/Counter/Counter"
import { render, screen } from "@testing-library/react"
// import { expect} from "@jest/globals"

fit("renders default value of counter", ()=>{
   render(<Counter description="My Counter" defaultValue={12} />) ;
   expect(screen.getByText('Counter: 12')).toBeInTheDocument()
   expect(screen.getByText('DESC: My Counter')).toBeInTheDocument()

})