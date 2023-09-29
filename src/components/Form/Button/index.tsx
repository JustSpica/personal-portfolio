import type { ButtonHTMLAttributes } from "react"
import { Slot } from "@radix-ui/react-slot"

import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: "rounded-lg px-3 py-2 text-sm font-medium transition-all disabled:bg-gray-500 disabled:hover:shadow-none disabled:cursor-not-allowed",
  variants: {
    type: {
      text: "text-emerald-600 hover:underline",
      fill: "bg-emerald-600 text-gray-50 hover:shadow-lg hover:bg-emerald-500 hover:shadow-emerald-100",
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
