'use client'

import { clsx } from 'clsx'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import logoAnimation from '../../public/lottie/logo.json'

const DynamicLottie = dynamic(() => import('lottie-react'), { ssr: false })

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
    <div className={clsx(className, 'h-[72px] w-[72px]', 'relative')}>
      <DynamicLottie
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
