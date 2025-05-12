'use client'

import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import dynamic from 'next/dynamic'
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Megaphone, Mail, BarChart, Linkedin, Facebook, AlertCircle, MessageSquare, LineChart, Bug, Lightbulb, AreaChart, Users, BarChart3, TrendingUp, Quote } from "lucide-react";
import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import SwipeGrid from '@/components/swipe-grid';
import HeroImage from '@/components/HeroImage';
import { Mark } from '@/components/logo'
import { Chart } from '@/components/Chart';

// Dynamically import IconCloud with SSR disabled
const DynamicIconCloud = dynamic(
  () => import('@/components/ui/interactive-icon-cloud').then(mod => mod.IconCloud),
  { ssr: false }
);

// Add dynamic import for SpotlightCursor
const DynamicSpotlightCursor = dynamic(
  () => import('@/components/magicui/spotlight-cursor'),
  { ssr: false }
);

// Added Icons constant with custom SVGs
const Icons = {
  gitHub: () => (
    <svg width="100" height="100" viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  notion: () => (
    <svg
      width="100" height="100" viewBox="0 0 100 100"
      fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="100" height="100" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100" height="100" viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100" height="100" viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915" x2="86.535" y1="32.567" y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115" height="1.114" x="-.057" y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[0.8] md:text-8xl/[0.9]">
          Turn raw feedback into insight on autopilot
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
          Unify feedback from every customer touchpoint and uncover what matters most — without tagging, sorting, or guessing.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/pricing">
            Explore plans
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ProblemSolutionSection() {
  return (
    <div className="my-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <Subheading>The Challenge</Subheading>
          <Heading as="h3" className="mt-2 mb-8 max-w-4xl">
            Teams are drowning in feedback but starving for insights
          </Heading>
          
          {/* Main problem card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-0 to-gray-50 border border-gray-100">
            <div className="absolute bottom-0 left-0 h-54 w-80 translate-y-12 -translate-x-12 rounded-full bg-rose-50/80 blur-3xl"></div>
            
            <div className="relative p-8 sm:p-10">
              <h3 className="text-lg text-gray-900 mb-16">
                Modern teams are overwhelmed with feedback scattered across:
              </h3>
              
              <div className="grid gap-5 sm:grid-cols-4 mb-20">
                {[
                  {
                    icon: <MessageSquare className="h-5 w-5" />,
                    title: "Support tickets",
                    examples: "Intercom, Zendesk",
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    icon: <MessageSquare className="h-5 w-5" />,
                    title: "Emails and Calls",
                    examples: "Gmail, Gong",
                    color: "bg-green-50 text-green-600",
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Communities",
                    examples: "Bettermode, Discord",
                    color: "bg-purple-50 text-purple-600",
                  },
                  {
                    icon: <BarChart3 className="h-5 w-5" />,
                    title: "Reviews",
                    examples: "G2, Capterra",
                    color: "bg-amber-50 text-amber-600",
                  },
                ].map((source, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${source.color}`}>
                      {source.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{source.title}</h4>
                      <p className="text-sm text-gray-500">{source.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-gray-50 px-6 py-1  font-light text-gray-900 border border-gray-100 rounded-full">But...</span>
                </div>
              </div>
              
              <div className="mt-10 space-y-5">
                {[
                  { 
                    title: "Feedback is unstructured",
                    description: "Most feedback is buried in support tickets, chats, emails, and reviews with no consistent structure." 
                  },
                  { 
                    title: "Categorization is manual and time-consuming",
                    description: "Teams spend countless hours tagging, categorizing, and summarizing feedback across tools." 
                  },
                  { 
                    title: "Insights are lost in noise",
                    description: "Critical insights get buried beneath the sheer volume of feedback." 
                  },
                  { 
                    title: "Teams struggle to prioritize",
                    description: "Without clear data, roadmap decisions, bug fixes, and messaging alignment become guesswork." 
                  },
                ].map((problem, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-rose-200 bg-rose-50">
                        <div className="h-2.5 w-2.5 rounded-full bg-rose-500"></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">{problem.title}</h4>
                      <p className="mt-1 text-sm text-gray-500">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quote card */}
          <div className="mt-8 rounded-4xl bg-gray-900 p-6 sm:p-8">
            <div className="flex justify-between">
              <Quote className="h-8 w-8 text-gray-800" />
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-teal-400 mr-2"></div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Reality</div>
              </div>
            </div>
            <blockquote className="mt-4">
              <p className="text-2xl  max-w-3xl font-medium leading-relaxed text-white">
                &quot;We know our users are trying to tell us something important, but it&apos;s scattered across a dozen tools. By the time we&apos;ve pieced it together, it&apos;s too late.&quot;
              </p>
              <footer className="mt-3  text-gray-400">
                — Product leaders everywhere
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
        Turn customer noise into product clarity.
        </Heading>
        <Screenshot
          width={1024}
          height={642}
          src="/screenshots/app5.png"
          className="mt-16 sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  const [isNetworkingCardHovered, setIsNetworkingCardHovered] = useState(false);

  return (
    <Container>
      <Subheading>Key Features</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
      sလrena listens to your users—so you can see them.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">

        <BentoCard
          eyebrow="COPILOT"
          title="Always-on product teammate"
          description='Your AI teammate that monitors every customer message, flags what matters, and summarizes the "why" behind user behavior—automatically.'
          graphic={
              <LinkedAvatars />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="INTEGRATIONS"
          title="Connect everything, instantly"
          description="30+ integrations from Slack, Intercom, Canny, HubSpot, Bettermode, and more—so Sorena can listen across the entire customer journey."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="DASHBOARD"
          title="See, before it's too late"
          description="Explore trends, feature demand, sentiment shifts, and key quotes—all in one clean, minimal dashboard. Built for decision-making, not just reporting."
          graphic={<Chart />}
          fade={['bottom']}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
                <BentoCard
          eyebrow="AI-Powered Categorization"
          title="Uses AI to tag, cluster, and summarize every voice of customer (VoC)"
          description="Automatically cluster and rank feature requests based on frequency, sentiment, and segment."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/VOC.png)] bg-[size:638px_330px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Clustering Engine"
          title="Detects recurring bugs, feature requests, and sentiment trends"
          description="With our advanced data mining, you&apos;ll know which companies your leads are talking to and exactly how much they&apos;re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/cluster.png)] bg-[size:630px_320px] bg-no-repeat" />

          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
      </div>
    </Container>
  )
}

// Define props type for DarkBentoSection
interface DarkBentoSectionProps {
  setIsNetworkingCardHovered: (isHovered: boolean) => void;
}

function DarkBentoSection({ setIsNetworkingCardHovered }: DarkBentoSectionProps) {
  return (
    <div className="mx-2 mb-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>How Sorena Helps</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
        From chaos to clarity—automatically.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
          <div
            onMouseEnter={() => setIsNetworkingCardHovered(true)}
            onMouseLeave={() => setIsNetworkingCardHovered(false)}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          >
            <BentoCard
              dark
              eyebrow="INTELLIGENCE"
              title="Every message, deeply understood."
              description="Sorena doesn't just summarize your feedback—it reads between the lines. From a complaint in Intercom to a hesitation in Slack, it understands tone, emotion, and request. Like a team member who never misses nuance."
              graphic={
                <div className="h-80 bg-[url(/screenshots/chat.png)] bg-[size:860px_382px] bg-no-repeat" />
              }
              fade={['top']}
            />
          </div>
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Built on a strategic VoC model."
            description="From public reviews to private conversations, we categorize, prioritize, and surface the right signals—at the right time."
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          {/* <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="sလrenaAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          /> */}
        </div>
      </Container>
    </div>
  )
}

function DashboardsSection() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  const dashboards = [
    {
      title: 'Product Dashboard',
      description:
        'Prioritize development based on real user feedback. Track feature requests, bugs, and sentiment across your product.',
      graphic: (
        <div className="w-full h-full bg-gray-800/70 rounded-lg overflow-hidden border border-white/10 flex flex-col">
          <div className="bg-indigo-900/30 p-3 border-b border-white/10">
            <div className="text-xs text-white/90 font-medium">Product Insights</div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <div className="text-xs text-blue-300">Top Feature Requests</div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-white/80">Dark mode</div>
                <div className="w-24 h-1.5 rounded-full overflow-hidden bg-white/10">
                  <div className="h-full w-3/4 bg-blue-400"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-white/80">Export to CSV</div>
                <div className="w-24 h-1.5 rounded-full overflow-hidden bg-white/10">
                  <div className="h-full w-1/2 bg-blue-400"></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-xs text-purple-300">Sentiment</div>
              <div className="h-1.5 rounded-full overflow-hidden bg-white/10 mt-2">
                <div className="h-full w-4/5 bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Support Dashboard',
      description:
        'Improve documentation and support efficiency. Identify recurring questions and prevent user waiting times.',
      graphic: (
        <div className="w-full h-full bg-gray-800/70 rounded-lg overflow-hidden border border-white/10 flex flex-col">
          <div className="bg-teal-900/30 p-3 border-b border-white/10">
            <div className="text-xs text-white/90 font-medium">Support Center</div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="flex justify-between">
              <div className="text-center">
                <div className="text-xs text-white/70">Open</div>
                <div className="text-sm text-teal-400">24</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-white/70">Avg Time</div>
                <div className="text-sm text-amber-400">3.2h</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-white/70">Resolved</div>
                <div className="text-sm text-green-400">67</div>
              </div>
            </div>
            
            <div>
              <div className="text-xs text-teal-300">Top Questions</div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-white/80 bg-white/5 p-1.5 rounded">
                  How to reset password?
                </div>
                <div className="text-xs text-white/80 bg-white/5 p-1.5 rounded">
                  Can&apos;t connect account
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Marketing Dashboard',
      description:
        'Enhance messaging with authentic user language. Extract positive quotes and address common objections in your marketing.',
      graphic: (
        <div className="w-full h-full bg-gray-800/70 rounded-lg overflow-hidden border border-white/10 flex flex-col">
          <div className="bg-purple-900/30 p-3 border-b border-white/10">
            <div className="text-xs text-white/90 font-medium">Marketing Insights</div>
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <div className="text-xs text-pink-300">User Quotes</div>
              <div className="mt-2 bg-white/5 p-3 rounded border border-white/10">
                <p className="text-xs text-white/80 italic">
                  &quot;This product has transformed how we handle feedback!&quot;
                </p>
              </div>
            </div>
            
            <div>
              <div className="text-xs text-purple-300">Language</div>
              <div className="mt-2 flex gap-1 flex-wrap">
                <div className="bg-white/10 rounded px-1.5 py-0.5">
                  <span className="text-[8px] text-white/80">insights</span>
                </div>
                <div className="bg-white/10 rounded px-1.5 py-0.5">
                  <span className="text-[8px] text-white/80">intuitive</span>
                </div>
                <div className="bg-white/10 rounded px-1.5 py-0.5">
                  <span className="text-[8px] text-white/80">time-saving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'AI-Powered Analytics',
      description:
        'All insights are generated automatically using artificial intelligence, minimizing the need for manual intervention.',
      graphic: (
        <div className="w-full h-full bg-gray-800/70 rounded-lg overflow-hidden border border-white/10 flex flex-col">
          <div className="bg-indigo-900/30 p-3 border-b border-white/10">
            <div className="text-xs text-white/90 font-medium">AI Analytics</div>
          </div>
          
          <div className="p-8 flex items-center justify-center">
            <div className="relative">
              <div className="size-28 rounded-full bg-indigo-900/20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="size-20 rounded-full bg-indigo-900/30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 size-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="size-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 2L8 6H4V10L0 14L4 18V22H8L12 26L16 22H20V18L24 14L20 10V6H16L12 2Z"
                    fillOpacity="0.5"
                  />
                  <circle cx="12" cy="14" r="3" fill="white" />
                </svg>
              </div>
              
              <div className="absolute -top-6 -left-6">
                <div className="size-8 rounded-md bg-blue-900/40 flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-300" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6">
                <div className="size-8 rounded-md bg-purple-900/40 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-purple-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="mx-2 rounded-4xl bg-gray-900 py-24 mt-2">
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <Subheading dark>Dashboard Sections</Subheading>
          <Heading as="h3" dark className="mt-2 max-w-3xl">
            Role-based dashboards for every team
          </Heading>
        </div>
        
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {dashboards.map((dashboard, dashboardIndex) => (
                    <div
                      key={dashboard.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === dashboardIndex
                          ? 'bg-white/10 lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/5 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg !outline-none',
                            selectedIndex === dashboardIndex
                              ? 'text-white'
                              : 'text-gray-300 hover:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {dashboard.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === dashboardIndex
                            ? 'text-white'
                            : 'text-gray-300 group-hover:text-white',
                        )}
                      >
                        {dashboard.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {dashboards.map((dashboard) => (
                  <TabPanel key={dashboard.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {dashboard.description}
                      </p>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-xl shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[32rem] xl:w-[38rem]">
                      <div className="p-8 h-[20rem]">
                        {dashboard.graphic}
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isNetworkingCardHovered, setIsNetworkingCardHovered] = useState(false);

  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <SwipeGrid /> */}
      <main>
        
        <ProblemSolutionSection />
        <Container className='mt-100 mb-120'>
          <div className="flex items-center justify-center gap-10">
          <Mark className='w-[360px] h-[360px]'></Mark>
            <div className="flex-1">
              <h1 className="font-display text-4xl font-medium tracking-tight text-balance text-gray-950 sm:text-8xl md:text-8sxl/[0.9]">
              sလrena, your voice of customer copilot.
              </h1>
              <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Sorena listens to your users across 30+ tools and delivers insights you can act on.
              </p></div>
            
          </div>
        </Container>
        <BentoSection />
        {/* <HeroImage /> */}
        <DarkBentoSection setIsNetworkingCardHovered={setIsNetworkingCardHovered} />
        {/* <PrimaryFeatures /> */}

      </main>
      {/* <SecondaryFeatures /> */}
      {/* <Testimonials /> */}
      <Footer />
      {isNetworkingCardHovered && <DynamicSpotlightCursor />}
    </div>
  )
}
