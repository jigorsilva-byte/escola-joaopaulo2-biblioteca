import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Debug logging
console.log('index.tsx loaded');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('Root element not found!');
  document.body.innerHTML = '<h1 style="color:red;padding:20px;">ERRO: Elemento raiz não encontrado</h1>';
  throw new Error('Could not find root element to mount to');
}

try {
  console.log('Creating React root...');
  const root = ReactDOM.createRoot(rootElement);
  
  console.log('Rendering App component...');
  root.render(
    <React.StrictMode>
      <App />
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
