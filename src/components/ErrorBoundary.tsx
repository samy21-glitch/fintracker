import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '2rem',
            background: '#0f1420',
            color: '#f0f4ff',
            fontFamily: 'sans-serif',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            Algo salió mal
          </h1>
          <p style={{ color: '#7a88b0', marginBottom: '1rem', fontSize: '0.875rem' }}>
            {this.state.error?.message ?? 'Error desconocido'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              background: '#6ee7b7',
              color: '#0f1420',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.5rem 1.25rem',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Reintentar
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
