import * as ToastPrimitive from "@radix-ui/react-toast"
import { tv, type VariantProps } from "tailwind-variants"

import { X, CheckCircle, XCircle } from "@phosphor-icons/react"

const toast = tv({
  slots: {
    base: "relative p-4 rounded-lg border border-gray-200 flex gap-3 bg-white shadow-md transition-all data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-full",
    close: "absolute top-4 right-4 text-gray-400",
    descriptionClass: "text-gray-400",
    icon: "",
  },
  variants: {
    status: {
      error: {
        icon: "text-red-500",
      },
      success: {
        icon: "text-green-500",
      },
    },
  },
})

export interface ToastProps
  extends React.ComponentProps<typeof ToastPrimitive.Root> {
  title: string
  variant: VariantProps<typeof toast>
  description?: string
}

export function Toast({ title, variant, description, ...props }: ToastProps) {
  const { base, close, descriptionClass, icon } = toast()

  return (
    <ToastPrimitive.Root className={base(variant)} duration={5000} {...props}>
      <ToastPrimitive.Close className={close(variant)} aria-label="Close">
        <X />
      </ToastPrimitive.Close>

      {variant.status === "error" ? (
        <XCircle className={icon(variant)} size={24} />
      ) : (
        <CheckCircle className={icon(variant)} size={24} />
      )}

      <div className="text-sm">
        <ToastPrimitive.Title>{title}</ToastPrimitive.Title>
        {description && (
          <ToastPrimitive.Description className={descriptionClass(variant)}>
            {description}
          </ToastPrimitive.Description>
        )}
      </div>
    </ToastPrimitive.Root>
  )
}
