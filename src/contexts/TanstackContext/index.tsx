"use client"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"

interface TanstackProviderProps {
  children: React.ReactNode
}

export function TanstackProvider({ children }: TanstackProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
