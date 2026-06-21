'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    setLoading(true);
    setMessage('');
    
    const res = await fetch('/api/upload', { method: 'POST' });
    const data = await res.json();
    
    if (res.ok) {
      setMessage(`✅ ${data.message}`);
    } else {
      setMessage(`❌ Error: ${data.error}`);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-md mx-auto border-2 border-white p-6 rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-2">Class Monitor</h1>
        <p className="text-gray-400 mb-8 text-lg">Hola Santi. Tienes 1 tarea pendiente.</p>

        <div className="bg-gray-900 p-4 border border-gray-700 rounded mb-6">
          <h2 className="text-xl font-bold">Matemáticas: Ecuaciones</h2>
          <p className="text-sm text-gray-400 mt-1">Vence hoy a las 11:59 PM</p>
          
          <button 
            onClick={handleUpload}
            disabled={loading}
            className="mt-4 w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-300 disabled:opacity-50 text-lg"
          >
            {loading ? 'Subiendo (Ahorrando datos)...' : 'Subir Archivo de Tarea'}
          </button>
        </div>

        {message && (
          <div className={`p-4 font-bold rounded text-lg ${message.includes('❌') ? 'bg-red-900 text-white' : 'bg-green-900 text-white'}`}>
            {message}
          </div>
        )}
      </div>
    </main>
  );
}