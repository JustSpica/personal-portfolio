import type { ComponentProps } from "react"

import { tv, type VariantProps } from "tailwind-variants"

const chip = tv({
  base: "rounded-lg px-2 py-1 text-xs font-medium",
  variants: {
    color: {
      finished: "bg-green-100 text-green-600",
      progress: "bg-blue-100 text-blue-600",
    },
  },
})

export interface ChipProps extends ComponentProps<"span"> {
  variant: VariantProps<typeof chip>
}

export function Chip({ variant, ...props }: ChipProps) {
  return <span className={chip(variant)} {...props} />
}
