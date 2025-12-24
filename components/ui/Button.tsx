interface ButtonProps {
   text: string
}

const Button = ({text}:ButtonProps) => {
  return (
    <div className="w-full bg-[#FF7739] py-4 rounded-lg font-semibold text-center text-white">
        {text}
    </div>
  )
}

export default Button