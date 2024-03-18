'use client'

import {NextUIProvider} from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function Providers({children}: { children: React.ReactNode }) {
  const [client] = useState(()=>new QueryClient({}))
  return (
    <NextUIProvider>
<QueryClientProvider client={client}>

      {children}
</QueryClientProvider>
    </NextUIProvider>
  )
}