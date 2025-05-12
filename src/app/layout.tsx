import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { CustomHead } from '@/components/CustomHead'

export const metadata: Metadata = {
  title: {
    template: '%s - sလrena',
    default: 'sလrena - Close every deal',
  },
  description:
    'sလrena helps you sell more by revealing sensitive information about your customers.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The sလrena Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">
        <CustomHead />
        {children}
      </body>
    </html>
  )
}
