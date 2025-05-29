'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Get the base path from next.config.js
    const basePath = process.env.NODE_ENV === 'production' ? '/sri-academics' : '';
    // Redirect to the index.html file with the correct base path
    window.location.href = `${basePath}/index.html`;
  }, []);

  return null;
}