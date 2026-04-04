import { Link } from 'wouter'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="text-xl font-semibold text-foreground mt-3 mb-1">
        Página no encontrada
      </h1>
      <p className="text-muted-foreground text-sm mb-6">
        La ruta que buscas no existe.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
