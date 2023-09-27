import type { ButtonHTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { Slot } from "@radix-ui/react-slot"

const button = tv({
  base: "rounded-lg px-3 py-2 text-sm",
  variants: {
    type: {
      text: "text-emerald-600",
      fill: "bg-emerald-600 text-gray-50",
    },
  },
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: VariantProps<typeof button>
}

export function Button({ asChild, variant, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button"

  return <Component className={button(variant)} {...props} />
}
