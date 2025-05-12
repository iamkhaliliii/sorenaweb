'use client'
import useSpotlightEffect from '@/hooks/use-spotlight-effect'
import { type HTMLAttributes } from 'react'

// Define an interface for the spotlight configuration
interface SpotlightConfig {
  radius?: number
  brightness?: number
  color?: string
  smoothing?: number
}

// Combine props with potential HTML canvas attributes
interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfig
}

const SpotlightCursor = ({
  config = {},
  className,
  ...rest
}: SpotlightCursorProps) => {
  // Provide default configuration if not specified
  const spotlightConfig = {
    radius: 200,
    brightness: 0.15,
    color: '#ffffff',
    smoothing: 0.1,
    ...config,
  }

  const canvasRef = useSpotlightEffect(spotlightConfig)

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed top-0 left-0 z-[9999] h-full w-full ${className}`}
      {...rest}
    />
  )
}

export default SpotlightCursor
