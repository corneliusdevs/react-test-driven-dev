import { FC }  from 'react'

interface CounterProps{
  description: string,
  defaultValue: number
}


function Counter({ description, defaultValue }: CounterProps):React.ReactNode{
  return(
    <div>
        <h2>DESC: {description}</h2>
        <h4>Counter: {defaultValue}</h4>
    </div>
  )
}

export default Counter