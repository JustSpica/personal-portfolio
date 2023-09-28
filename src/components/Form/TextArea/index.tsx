import { type ComponentProps, forwardRef } from "react"

export interface FormTextAreaProps extends ComponentProps<"textarea"> {
  label?: string
  required?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ label, required, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col items-start gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-800">
            {label}
            {required && <span className="text-red-600">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          className="min-h-[120px] w-full rounded-md border-2 border-gray-200 bg-white 
          px-3 py-2 text-sm text-gray-800 outline-none transition-all 
          placeholder:text-gray-400 focus:border-emerald-600 
          focus:text-emerald-600 focus:outline-none"
          {...props}
        />
      </div>
    )
  },
)

TextArea.displayName = "TextArea"
