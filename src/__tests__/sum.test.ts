import sum from "../utils/sum";
import {describe, expect, it, test} from "@jest/globals"

it("should sum add numbers and return sum", ()=>{
    const a:number = 5;
    const b:number = 6
    expect(sum(a, b)).toBe(11)
})


