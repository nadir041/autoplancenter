import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const ToastContext = createContext(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  const showToast = useCallback((msg) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage(msg);
    setShow(true);
    timerRef.current = setTimeout(() => {
      setShow(false);
    }, 3600);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className={`toast${show ? ' show' : ''}`} id="toast">
        {message}
      </div>
    </ToastContext.Provider>
  );
}

export default function Toast() {
  return null;
}
