'use client';

import React, { useEffect, useState } from 'react';
import { isBrowser } from './document-helper';

/**
 * Higher Order Component to safely render components that use browser APIs
 * This component will only render its children on the client side
 */
export function withBrowserSafety(Component) {
  // Return a new component
  return function SafeComponent(props) {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    // Only render the component on the client side
    if (!isMounted) {
      return null; // or a loading state/placeholder
    }
    
    return <Component {...props} />;
  };
}

/**
 * Component to use as a wrapper for browser-only content
 */
export function BrowserOnly({ children, fallback = null }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return fallback;
  }
  
  return <>{children}</>;
} 