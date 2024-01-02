import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('content view loaded');
  }, []);

  return (
    <div className="p-6 bg-black text-white fixed top-4 right-4 max-w-xs rounded-md text-center font-mono tracking-tighter w-full">
      content view
    </div>
  );
}
