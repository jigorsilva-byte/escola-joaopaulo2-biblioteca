import React from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error | null;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log to console for now — could be extended to external service
    // Keep logs concise and useful
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', { error, info });
  }

  render() {
    if (this.state.hasError) {
      const message = this.state.error ? this.state.error.message : 'Erro desconhecido';
      return (
        <div style={{ padding: 20, fontFamily: 'system-ui, sans-serif' }}>
          <h1 style={{ color: 'crimson' }}>Erro na aplicação</h1>
          <p>{message}</p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.stack}
          </details>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
