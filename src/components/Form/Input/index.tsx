import { type ComponentProps, forwardRef } from "react"

export interface FormInputProps extends ComponentProps<"input"> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col items-start gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-800">{label}</label>
        )}

        <input
          ref={ref}
          className="w-full rounded-md border-2 border-gray-200 bg-white 
          px-3 py-2 text-sm text-gray-800 outline-none transition-all 
          placeholder:text-gray-300 focus:border-emerald-600 
          focus:text-emerald-600 focus:outline-none"
          {...props}
        />
      </div>
    )
  },
)

Input.displayName = "Input"
