import { Toaster as SonnerToaster } from 'sonner'

export function Toaster() {
  return (
    <SonnerToaster
      theme="dark"
      position="top-center"
      richColors
      toastOptions={{
        style: {
          background: 'hsl(224, 35%, 13%)',
          border: '1px solid hsl(224, 33%, 25%)',
          color: 'hsl(225, 100%, 97%)',
        },
      }}
    />
  )
}
