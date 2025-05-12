'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const Chart = () => {
  const opacityControls = useAnimation()
  const pathLengthControls = useAnimation()

  useEffect(() => {
    let isMounted = true

    const sequence = async () => {
      while (isMounted) {
        // 1. Set initial state for the loop iteration
        opacityControls.set({ opacity: 0 })
        pathLengthControls.set({ pathLength: 0 })

        // 2. Opacity fade-in
        opacityControls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        })

        // 3. Path draw, slightly delayed after opacity starts
        // Await this so the hold starts after path is drawn
        if (!isMounted) break
        await pathLengthControls.start({
          pathLength: 1,
          transition: { duration: 0.4, delay: 0.1 }, // Starts 0.1s into opacity fade-in
        })

        // 4. Hold for a period (path is drawn, opacity is full)
        if (!isMounted) break
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // 5. Fade out (path disappears with opacity)
        if (!isMounted) break
        await opacityControls.start({
          opacity: 0,
          transition: { duration: 0.3 },
        })

        // 6. Brief pause before the next iteration
        if (!isMounted) break
        await new Promise((resolve) => setTimeout(resolve, 200))
      }
    }

    sequence()

    return () => {
      isMounted = false
      opacityControls.stop()
      pathLengthControls.stop()
    }
  }, [opacityControls, pathLengthControls])

  return (
    <div
      className={
        'flex h-full w-full items-center justify-center overflow-hidden border-neutral-300 dark:border-neutral-800 dark:shadow-none'
      }
      // onMouseEnter removed for continuous loop
    >
      <div
        className={
          'absolute top-4 left-4 z-10 p-4 text-neutral-900 dark:text-neutral-100'
        }
      >
        <div className={'font-medium'}>This Month:</div>
        <div className={'text-3xl font-bold'}>+300%</div>
      </div>
      <div
        className={
          'dark:bg-grid-neutral-700 bg-grid-neutral-200 relative h-full w-full bg-white dark:bg-neutral-950'
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 653 465"
          className="h-full w-full"
        >
          <motion.path
            animate={opacityControls} // Controlled by useAnimation
            d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955 19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798L653 465H0Z"
            className={'fill-purple-200 dark:fill-sky-800'}
            // initial and transition props removed
          />
          <motion.path
            animate={pathLengthControls} // Controlled by useAnimation
            d="M0 460.694c6.6-3.13 19.8-11.272 33-15.654s19.8-2.814 33-6.257 19.8.365 33-10.955 19.8-32.07 33-45.643c13.2-13.572 19.8-16.08 33-22.22s19.8-5.647 33-8.48c13.2-2.832 19.8 5.901 33-5.68 13.2-11.582 19.8-37.759 33-52.226 13.2-14.468 19.8-28.263 33-20.112 13.2 8.15 19.8 59.038 33 60.863 13.2 1.824 19.8-43.269 33-51.741s19.8 24.488 33 9.38c13.2-15.11 19.8-81.825 33-84.923s19.8 54.76 33 69.432 19.8 34.912 33 3.931 19.8-148.752 33-158.837c13.2-10.086 19.8 111.943 33 108.409 13.2-3.535 19.8-97.635 33-126.082s19.8-7.562 33-16.152 26.4-21.438 33-26.798"
            fill="none"
            className={'stroke-purple-500 dark:stroke-sky-400'}
            strokeWidth="4"
            // initial and transition props removed
          />
        </svg>
      </div>
    </div>
  )
}
