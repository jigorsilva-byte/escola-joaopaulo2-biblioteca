import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML = '<h1>Error: Root element not found</h1>';
  throw new Error('Could not find root element to mount to');
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  document.body.innerHTML = `<h1>Error loading app</h1><p>${error instanceof Error ? error.message : String(error)}</p><pre>${error instanceof Error ? error.stack : ''}</pre>`;
}
