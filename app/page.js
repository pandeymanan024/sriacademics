'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log('Redirecting to index.html');
    router.push('/index.html');
    console.log('Redirected to index.html');
  }, [router]);

  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      padding: '20px'
    }}>
      Welcome to Sri Academics
    </main>
  );
  
}