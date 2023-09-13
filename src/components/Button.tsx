import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string
}

const Button:FC<ButtonProps> = ({
    text, 
    ...props
    }):React.ReactNode => {

    return(
         <button className="bg-slate-800 text-white text-lg px-4 py-0.5 rounded-md" {...props}> { text } </button>
    )
}

export default Button