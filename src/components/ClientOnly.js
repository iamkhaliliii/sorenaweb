'use client';

import { useEffect, useState } from 'react';

/**
 * This component ensures children are only rendered on the client-side
 * after hydration, preventing "document is not defined" errors
 */
export default function ClientOnly({ children, fallback = null }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // On the first render, isClient will be false
  // So we return fallback (null by default) to not attempt to render children
  if (!isClient) {
    return fallback;
  }

  return children;
} 