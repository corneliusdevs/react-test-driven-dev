import "@testing-library/jest-dom"
import "@testing-library/user-event"
import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../Counter";

// TESTS FOR CORRECT RENDERING OF COUNTER WITH CORRECT PROPS
describe("checks to see if counter renders with correct defaultValue and description and defaultCountInterval", ()=>{

    beforeEach(()=>{
        render(<Counter defaultValue={0} description="My Counter" defaultCountInterval={1} />)
    })

    it("renders 'Counter: 0'", ()=>{  
        expect(screen.getByText('Counter: 0')).toBeInTheDocument()
   })

   it("renders 'DESC: My Counter'", ()=>{  
    expect(screen.getByText('DESC: My Counter')).toBeInTheDocument()
   })

   it("renders 'Count Interval: 1'", ()=>{  
        expect(screen.getByText('Count Interval: 1')).toBeInTheDocument()
    })

})

// TESTS FOR INCREMENT AND DECREMENT BUTTONS
describe("tests to see if increment and decrement buttons are correcting updating count with correct defaultCountInterval", ()=>{
 
    // TESTS FOR INCREMENT BUTTON
    describe("tests to see if increment button is correcting incrementing count with correct defaultCountInterval", ()=>{
      
        it("when clicked, correctly increments count by 1 when defaultCountInterval is 1 ", ()=>{
            render(<Counter defaultValue={0} description="My Counter" defaultCountInterval={1}/>)
            fireEvent.click(screen.getByRole('button', {name: 'increment'}))
            expect(screen.getByText("Counter: 1")).toBeInTheDocument()
        })
        
        it("when clicked, correctly increments count by 2 when defaultCountInterval is 2 ", ()=>{
            render(<Counter defaultValue={0} description="My Counter" defaultCountInterval={1}/>)
            fireEvent.click(screen.getByRole('button', {name: 'increment'}))
            expect(screen.getByText("Counter: 1")).toBeInTheDocument()
        })

        it("when clicked multiple times, correctly increments count by specified countInterval", ()=>{
            render(<Counter defaultValue={0} description="My Counter" defaultCountInterval={6}/>)
            fireEvent.click(screen.getByRole('button', {name: 'increment'}))
            fireEvent.click(screen.getByRole('button', {name: 'increment'}))
            fireEvent.click(screen.getByRole('button', {name: 'increment'}))
            fireEvent.click(screen.getByRole('button', {name: 'increment'}))
            expect(screen.getByText("Counter: 24")).toBeInTheDocument()
        })
    })

    // TESTS FOR DECREMENT BUTTON
    describe("tests to see if decrement button is correcting incrementing count with correct defaultCountInterval", ()=>{
      
        it("when clicked, correctly decrements count by 1 when defaultCountInterval is 1 ", ()=>{
            render(<Counter defaultValue={0} description="My Counter" defaultCountInterval={1}/>)
            fireEvent.click(screen.getByRole('button', {name: 'decrement'}))
            expect(screen.getByText("Counter: -1")).toBeInTheDocument()
        })

        it("when clicked, correctly decrements count by 2 when defaultCountInterval is 2 ", ()=>{
            render(<Counter defaultValue={0} description="My Counter" defaultCountInterval={2}/>)
            fireEvent.click(screen.getByRole('button', {name: 'decrement'}))
            expect(screen.getByText("Counter: -2")).toBeInTheDocument()
        })

        it("when clicked multiple times, correctly decrements count by specified defaultCountInterval", ()=>{
            render(<Counter defaultValue={0} description="My Counter" defaultCountInterval={6}/>)
            fireEvent.click(screen.getByRole('button', {name: 'decrement'}))
            fireEvent.click(screen.getByRole('button', {name: 'decrement'}))
            fireEvent.click(screen.getByRole('button', {name: 'decrement'}))
            fireEvent.click(screen.getByRole('button', {name: 'decrement'}))
            expect(screen.getByText("Counter: -24")).toBeInTheDocument()
        })
    })
})



// TESTS FOR COUNTER FUNCTIONALITY WITH CUSTOM countInterval SET BY INPUT FIELD

describe("tests if input field correctly updates countInterval", ()=>{

   it("updates countInterval by specified input value",  ()=>{

      //setup for input field to be rendered and tested. Refer to the docs for fire input event in testing-library/react https://testing-library.com/docs/example-input-event/
      
       const setup = ()=>{
        const utils = render(<Counter defaultValue={0} description="My Counter" defaultCountInterval={1} />)
        const input = screen.getByLabelText(/input-count-interval/)
        return {
            input,
            ...utils,
        }
       }
       
       // get input element returned by setup
        const input = setup().input
        fireEvent.change(input , {target: {value: '3'}})

        // manipulates value attribute of input element to get user input
        expect(input.attributes.getNamedItem('value')?.value).toBe('3')

        fireEvent.click(screen.getByRole("button", {name: 'update'}))
        expect(screen.getByText("Count Interval: 3")).toBeInTheDocument()

   })
})

 
