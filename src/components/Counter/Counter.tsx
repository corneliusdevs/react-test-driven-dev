'use client'

import { ReactEventHandler, useState, SyntheticEvent}  from 'react'
import Button from '../Button'
import Input from '../Input'


interface CounterProps{
  description: string,
  defaultValue: number,
  defaultCountInterval: number
}


function Counter({ description, defaultValue, defaultCountInterval}: CounterProps):React.ReactNode{
   
  const [count, setCount] = useState(defaultValue)
  const [countInterval, setCountInterval] = useState(defaultCountInterval)
  const [inputValue, setInputValue] = useState(defaultCountInterval)

  const handleChange = (ev:React.ChangeEvent<HTMLInputElement>)=>{
     ev.preventDefault()
     setInputValue(parseInt(ev.target.value))
  }

  return(
    <main  className='justify-center align-center'>

      <div className='justify-center align-center'>
        <h2 className='text-slate-900 text-3xl font-bold'>DESC: {description}</h2>
        <h2 className='text-slate-900 text-2xl font-500 pt-2'>Count Interval: {countInterval}</h2>
        <h2 className='text-slate-900 text-2xl font-500 pt-2'>Your Input: {inputValue}</h2>
      </div>

        <div className='pt-2.5 w-4xl mx-4'>
          <span className=''>
            <Button text="+" aria-label="increment"
            onClick={()=>{
              setCount(val => val + countInterval )
            }} />
          </span>

          <span className='mx-4 font-normal text-slate-700 text-2xl'>Counter: {count}</span>

          <span>
            <Button text="-" aria-label="decrement" 
            onClick={()=>{
              setCount(val => val - countInterval )
            }}/>
          </span> 

          <div>
            <Input type="number" value={inputValue} aria-label="input-count-interval"  onChange={handleChange} />

            <Button aria-label= "update" type='button' text="update" onClick={()=>{
              setCountInterval(inputValue)
            }}/>
          </div>

        </div>
    </main>
  )
}

export default Counter