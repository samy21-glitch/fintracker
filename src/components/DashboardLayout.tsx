import { BarChart2, LayoutDashboard, ArrowLeftRight, Tag, Wallet } from 'lucide-react'
import { Link, useLocation } from 'wouter'

const NAV_ITEMS = [
  { href: '/',              label: 'Inicio',      Icon: LayoutDashboard },
  { href: '/transactions',  label: 'Gastos',      Icon: ArrowLeftRight  },
  { href: '/budgets',       label: 'Quincenas',   Icon: Wallet          },
  { href: '/analytics',     label: 'Análisis',    Icon: BarChart2       },
  { href: '/categories',    label: 'Categorías',  Icon: Tag             },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation()

  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 overflow-y-auto pb-[58px]">
        {children}
      </main>

      <nav
        className="fixed bottom-0 left-0 right-0 h-[58px] flex items-stretch bg-card border-t border-border z-50"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
      >
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const isActive = href === '/' ? location === '/' : location.startsWith(href)

          return (
            <Link
              key={href}
              href={href}
              className={[
                'flex-1 flex flex-col items-center justify-center gap-[2px]',
                'text-[9px] font-bold tracking-wider uppercase transition-colors duration-150',
                isActive ? 'text-primary' : 'text-muted-foreground',
              ].join(' ')}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
