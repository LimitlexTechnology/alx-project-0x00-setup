import { ButtonProps } from "@/interfaces"

const SHAPES = ["rounded-sm", "rounded-md", "rounded-full"] as const

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  const hasShape = SHAPES.some((s) => styles.includes(s))
  const className = hasShape ? styles : `${styles} rounded-md`
  return (
    <button className={className}>{title}</button>
  )
}

export default Button
