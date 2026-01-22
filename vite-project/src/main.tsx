
import { createRoot } from 'react-dom/client'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { allroutes } from './core/components/routing/allroutes'

const queryClient=new QueryClient

createRoot(document.getElementById('root')!).render(

    <QueryClientProvider client={queryClient}>
       <RouterProvider router={allroutes}/>
    </QueryClientProvider>
  
)
