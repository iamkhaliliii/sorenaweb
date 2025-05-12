'use client'

import { useEffect } from 'react'

/**
 * This component handles any client-side document operations
 * and isolates them from server-side rendering
 */
export function CustomHead() {
  useEffect(() => {
    // Safe to use document here because this runs only on the client
    // Any document operations can go here
  }, [])

  return null
}
