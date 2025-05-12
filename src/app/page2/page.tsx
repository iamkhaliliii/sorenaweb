import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic';

// Dynamically import Keyboard
const Keyboard = dynamic(
  () => import('@/components/keyboard').then(mod => mod.Keyboard),
  { ssr: false }
);

const DynamicLogoTimeline = dynamic(() => import('@/components/logo-timeline').then(mod => mod.LogoTimeline), { ssr: false });

export const metadata: Metadata = {
  description: 'Sorena turns scattered customer feedback into actionable insights through AI-powered dashboards.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.9]">
            Turn customer noise into product clarity.
          </h1>
          <p className="mt-8 max-w-xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Sorena listens to your users across 30+ tools and delivers weekly insights you can act on.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#demo">See how it works</Button>
            <Button variant="secondary" href="/pricing">
              Explore plans
            </Button>
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
          AI dashboards that reveal what your customers are saying.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Insights</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Role-based VoC intelligence for every team.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Product"
          title="Top Feature Requests"
          description="Automatically cluster and rank feature requests based on frequency, sentiment, and segment."
          graphic={<DynamicLogoTimeline />}
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Support"
          title="Trending Issues"
          description="Surface top complaints and friction points. Auto-tag support tickets and deflect repetitive ones."
          graphic={<Map />}
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Marketing"
          title="Customer Quotes & Objections"
          description="Extract high-sentiment user quotes and common objections to refine messaging and campaigns."
          graphic={<LinkedAvatars />}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Dashboard"
          title="Sentiment by Feature"
          description="Visualize sentiment grouped by feature with weekly or monthly changes tracked automatically."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Emerging Signals"
          title="Unclassified Themes"
          description="Detect and highlight new themes or trends not previously tracked by your team."
          graphic={<Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>How Sorena Helps</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          From chaos to clarity—automatically.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Data"
            title="Ingest 1758 signals, cleanly."
            description="Pull from 30+ integrations and unify VoC data across formats and teams."
            graphic={<LogoTimeline />}
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Clustering"
            title="Group what matters"
            description="AI-powered grouping of feedback into bugs, requests, confusion, and emotional tones."
            graphic={<LogoCluster />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Copilot"
            title="Always up to speed"
            description="Ask Sorena what changed this week, what users want most, and where to focus."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Action"
            title="Push to action"
            description="Send insights to Linear, Jira, Notion, or Slack directly from each cluster."
            graphic={<Map />}
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
} 