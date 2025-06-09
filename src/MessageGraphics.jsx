import React, { useState } from 'react';

// Graphical React component inspired by the Java class
export default function MessageGraphics() {
  const [message, setMessage] = useState('Hello from Java!');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        padding: 40,
        minWidth: 350,
        textAlign: 'center',
        position: 'relative'
      }}>
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ marginBottom: 20 }}>
          <circle cx="40" cy="40" r="38" fill="#aee1f9" stroke="#5dade2" strokeWidth="4" />
          <text x="40" y="50" textAnchor="middle" fontSize="32" fill="#2471a3" fontWeight="bold">💬</text>
        </svg>
        <h2 style={{ color: '#2471a3', marginBottom: 24 }}>Message Center</h2>
        <div style={{
          fontSize: 20,
          color: '#34495e',
          marginBottom: 24,
          minHeight: 32,
          fontWeight: 'bold',
          letterSpacing: 1
        }}>
          {message}
        </div>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{
            padding: '10px 16px',
            borderRadius: 8,
            border: '1px solid #b2bec3',
            fontSize: 16,
            width: '80%',
            marginBottom: 16
          }}
          placeholder="Type your message..."
        />
        <br />
        <button
          onClick={() => alert(message)}
          style={{
            background: 'linear-gradient(90deg, #5dade2 0%, #48c6ef 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 28px',
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(52, 73, 94, 0.08)'
          }}
        >
          Show Message
        </button>
      </div>
    </div>
  );
}
