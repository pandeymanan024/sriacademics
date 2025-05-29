'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // redirect to the index.html file
    window.location.href = '/index.html';
  }, []);

  return null;
}