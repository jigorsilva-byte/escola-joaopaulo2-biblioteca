import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

// Debug logging
console.log('index.tsx loaded');

function initApp() {
  console.log('Initializing app on DOMContentLoaded/ready...');
  const rootElement = document.getElementById('root');
  console.log('Root element:', rootElement);

  if (!rootElement) {
    console.error('Root element not found after DOM ready!');
    document.body.innerHTML =
      '<h1 style="color:red;padding:20px;">ERRO: Elemento raiz não encontrado</h1>';
    return;
  }

  try {
    console.log('Creating React root...');
    const root = ReactDOM.createRoot(rootElement);

    console.log('Rendering App component...');
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Failed to render app:', error);
    const errorMsg = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : '';
    console.error('Stack:', errorStack);
    document.body.innerHTML = `<div style="padding:20px;font-family:monospace;color:red;"><h1>ERRO ao carregar a aplicação</h1><p><strong>${errorMsg}</strong></p><pre>${errorStack}</pre></div>`;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
