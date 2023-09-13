import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

function Input({...props}: InputProps):React.ReactNode{
  
    return(
        <input {...props} />
    )
}

export default Input