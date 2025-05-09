'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import Lottie from 'lottie-react'
import logoAnimation from '../../public/lottie/logo.json'

export function Logo({ className }: { className: string }) {
  return (
    <Image 
      src="/logo-svg/logo.svg" 
      alt="sလrena"
      width={127}
      height={23}
      className={clsx(className, 'h-auto')}
    />
  )
}

export function Mark({ className }: { className: string }) {
  return (
    <div className={clsx(className, 'w-[72px] h-[72px]', 'relative')}>
      <Lottie
        animationData={logoAnimation}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
      <Image
        src="/logo-svg/Logomark.svg"
        alt="Logomark"
        width={28}
        height={28}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
