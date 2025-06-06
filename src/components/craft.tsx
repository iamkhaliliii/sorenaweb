// craft-ds, v0.2.8
// This is a design system for building responsive layouts in React

import { type ClassValue, clsx } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

// Utility function to merge class names using clsx and tailwind-merge

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Types for component props

type LayoutProps = {
  children: React.ReactNode
  className?: string
}

type MainProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

type ContainerProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

type ArticleProps = {
  children?: React.ReactNode
  className?: string
  id?: string
  dangerouslySetInnerHTML?: { __html: string }
}

type BoxProps = {
  children: React.ReactNode
  className?: string
  direction?:
    | 'row'
    | 'col'
    | {
        sm?: 'row' | 'col'
        md?: 'row' | 'col'
        lg?: 'row' | 'col'
        xl?: 'row' | 'col'
        '2xl'?: 'row' | 'col'
      }
  wrap?:
    | boolean
    | {
        sm?: boolean
        md?: boolean
        lg?: boolean
        xl?: boolean
        '2xl'?: boolean
      }
  gap?:
    | number
    | { sm?: number; md?: number; lg?: number; xl?: number; '2xl'?: number }
  cols?:
    | number
    | { sm?: number; md?: number; lg?: number; xl?: number; '2xl'?: number }
  rows?:
    | number
    | { sm?: number; md?: number; lg?: number; xl?: number; '2xl'?: number }
}

// Layout Component
// This component sets up the basic HTML structure and applies global styles

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('scroll-smooth antialiased focus:scroll-auto', className)}
    >
      {children}
    </html>
  )
}

// Main Component
// This component is used for the main content area of the page

const Main = ({ children, className, id }: MainProps) => {
  return (
    <main
      className={cn(
        // \`Main\` Specific Styles
        'prose-p:m-0 max-w-none',
        // General Prose
        'prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg',
        // Prose Headings
        'prose-headings:font-normal',
        // Prose Strong
        'prose-strong:font-semibold',
        // Inline Links
        'prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all',
        // Inline Link Hover
        'hover:prose-a:decoration-primary hover:prose-a:text-foreground',
        // Blockquotes
        'prose-blockquote:not-italic',
        // Pre and Code Blocks
        'prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground',
        className,
      )}
      id={id}
    >
      {children}
    </main>
  )
}

// Section Component
// This component is used for defining sections within the page

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn('py-8 md:py-12', className)} id={id}>
      {children}
    </section>
  )
}

// Container Component
// This component is used for containing content with a maximum width and padding

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={cn('mx-auto max-w-5xl', 'p-6 sm:p-8', className)} id={id}>
      {children}
    </div>
  )
}

// Article Component
// This component is used for rendering articles with optional dangerouslySetInnerHTML

const Article = ({
  children,
  className,
  id,
  dangerouslySetInnerHTML,
}: ArticleProps) => {
  return (
    <article
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      className={cn(
        // General Prose
        'prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg',
        // Prose Headings
        'prose-headings:font-normal',
        // Prose Paragraphs
        'prose-p:mb-0',
        // Prose Strong
        'prose-strong:font-semibold',
        // Inline Links
        'prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all',
        // Inline Link Hover
        'hover:prose-a:decoration-primary hover:prose-a:text-foreground',
        // Blockquotes
        'prose-blockquote:not-italic',
        // Pre and Code Blocks
        'prose-pre:border prose-pre:bg-muted/25',
        className,
      )}
      id={id}
    >
      {children}
    </article>
  )
}

const Box = ({
  children,
  className,
  direction = 'row',
  wrap = false,
  gap = 0,
  cols,
  rows,
}: BoxProps) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
  }

  const wrapClasses = wrap ? 'flex-wrap' : 'flex-nowrap'

  const gapClasses = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12',
  }

  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  }

  const getResponsiveClasses = (
    prop: any,
    classMap: Record<string | number, string>,
  ) => {
    if (typeof prop === 'object') {
      return Object.entries(prop)
        .map(([breakpoint, value]) => {
          const prefix = breakpoint === 'sm' ? '' : `${breakpoint}:`
          return `${prefix}${classMap[value as keyof typeof classMap] || ''}`
        })
        .join(' ')
    }
    return classMap[prop as keyof typeof classMap] || ''
  }

  const stackClasses = cn(
    cols || rows ? 'grid' : 'flex',
    getResponsiveClasses(direction, directionClasses),
    typeof wrap === 'boolean'
      ? wrapClasses
      : getResponsiveClasses(wrap, { true: 'flex-wrap', false: 'flex-nowrap' }),
    getResponsiveClasses(gap, gapClasses),
    cols && getResponsiveClasses(cols, colsClasses),
    rows && getResponsiveClasses(rows, colsClasses), // Assuming rows use the same classes as cols
    className,
  )

  return <div className={stackClasses}>{children}</div>
}

// Exporting all components for use in other parts of the application

export { Article, Box, Container, Layout, Main, Section }
