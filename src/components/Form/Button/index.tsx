import type { ButtonHTMLAttributes } from "react"
import { Slot } from "@radix-ui/react-slot"

import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: "rounded-lg px-3 py-2 text-sm",
  variants: {
    type: {
      text: "text-emerald-600",
      fill: "bg-emerald-600 text-gray-50",
    },
  },
  defaultVariants: {
    type: "fill",
  },
})

export interface FormButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: VariantProps<typeof button>
}

export function Button({ asChild, variant, ...props }: FormButtonProps) {
  const Component = asChild ? Slot : "button"

  return <Component className={button(variant)} {...props} />
}
