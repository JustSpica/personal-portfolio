import * as SelectPrimitive from "@radix-ui/react-select"

import { CaretDown } from "@phosphor-icons/react"

export const Root = SelectPrimitive.Root

export interface FormSelectTriggerProps {
  label?: string
  placeholder?: string
}

export function Trigger({ label, placeholder }: FormSelectTriggerProps) {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-800">{label}</label>
      )}

      <SelectPrimitive.Trigger
        className="group flex w-full items-center justify-between rounded-md 
        border-2 border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 
        outline-none transition-all focus:border-emerald-600 
        focus:text-emerald-600 focus:outline-none 
        data-[state=open]:border-emerald-600 data-[placeholder]:text-gray-400 
        data-[state=open]:text-emerald-600 data-[state=open]:outline-none"
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon
          className="transition-transform group-data-[state=open]:rotate-180"
          asChild
        >
          <CaretDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    </div>
  )
}

export interface FormSelectContentProps {
  children: React.ReactNode
}
export function Content({ children }: FormSelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        className="relative z-50 max-h-52 min-w-[var(--radix-select-trigger-width)]
        rounded-md border-2 border-emerald-600 bg-white text-sm 
        text-gray-800 data-[side=bottom]:translate-y-1 
        data-[side=top]:-translate-y-1 data-[state=open]:animate-in 
        data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
      >
        <SelectPrimitive.Viewport className="w-full p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export interface FormSelectItemProps {
  children: React.ReactNode | string
  value: string
}

export function Item({ children, value }: FormSelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="rounded-md px-3 py-2 text-gray-800 outline-none 
      transition-colors hover:cursor-pointer hover:bg-emerald-100 
      data-[state=checked]:bg-emerald-100"
      value={value}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}
