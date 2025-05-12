import { clsx } from 'clsx'
// import { Mark } from './logo'
import dynamic from 'next/dynamic';

const DynamicMark = dynamic(() => import('./logo').then(mod => mod.Mark), { ssr: false });

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-[length:12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Logo({
  label,
  srcs,
  className,
}: {
  label: string
  srcs: string[]
  className: string
}) {
  return (
    <div
      className={clsx(
        className,
        'absolute top-2 flex items-center gap-2 px-3 py-1 whitespace-nowrap',
        'rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:running] [animation-timing-function:linear]',
      )}
    >
      <div className="flex gap-1.5">
        {srcs.map((src, index) => (
          <img alt="" src={src} className="size-4" key={index} />
        ))}
      </div>
      <span className="text-sm/6 font-medium text-white">{label}</span>
    </div>
  )
}

export function LogoTimeline() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="absolute inset-0 top-8 z-10 flex items-center justify-center">
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: `url('data:image/svg+xml,<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="12" fill="black"/></svg>')`,
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
          }}
        />
        <div className="relative flex size-24 items-center justify-center rounded-full bg-linear-to-t from-white/5 to-white/25 shadow-sm ring-1 ring-white/10 outline outline-offset-[-5px] outline-white/5 ring-inset">
          <DynamicMark className="h-[72px] w-[72px] fill-white" />
        </div>
      </div>
      <div className="[container-type:inline-size] absolute inset-0 grid grid-cols-1 pt-8">
        {/* Row 1: Duration 60s - Reviews, Social Channels */}
        <Row>
          <Logo
            label="Reviews"
            srcs={["/logo-timeline/appstore.svg","/logo-timeline/googleplay.svg","/logo-timeline/Trustpilot.svg","/logo-timeline/G2.svg","/logo-timeline/Capterra.svg"]}
            className="[animation-delay:0s] [animation-duration:60s]"
          />
          <Logo
            label="Social Channels"
            srcs={["/logo-timeline/x.svg","/logo-timeline/linkedin.svg","/logo-timeline/facebook.svg","/logo-timeline/Reddit.svg","/logo-timeline/youtube.svg"]}
            className="[animation-delay:-30s] [animation-duration:60s]"
          />
        </Row>

        {/* Row 2: Duration 70s - Community, Customer Support */}
        <Row>
          <Logo
            label="Community"
            srcs={["/logo-timeline/discord.svg","/logo-timeline/slack.svg","/logo-timeline/bettermode.svg"]}
            className="[animation-delay:0s] [animation-duration:70s]"
          />
          <Logo
            label="Customer Support"
            srcs={["/logo-timeline/Intercom.svg","/logo-timeline/zendesk.svg","/logo-timeline/freshdesk.svg"]}
            className="[animation-delay:-35s] [animation-duration:70s]"
          />
        </Row>

        {/* Row 3: Duration 50s - Direct Conversations, Surveys & NPS */}
        <Row>
          <Logo
            label="Direct Conversations"
            srcs={["/logo-timeline/gmail.svg","/logo-timeline/hubspot.svg","/logo-timeline/zoom.svg","/logo-timeline/Salesforce.svg"]}
            className="[animation-delay:0s] [animation-duration:50s]"
          />
          <Logo
            label="Surveys & NPS"
            srcs={["/logo-timeline/Typeform.svg","/logo-timeline/Airtable.svg","/logo-timeline/GoogleForms.svg"]}
            className="[animation-delay:-25s] [animation-duration:50s]"
          />
        </Row>

        {/* Row 4: Duration 65s - Reviews, Customer Support */}
        <Row>
          <Logo
            label="Reviews"
            srcs={["/logo-timeline/appstore.svg","/logo-timeline/googleplay.svg","/logo-timeline/Trustpilot.svg","/logo-timeline/G2.svg","/logo-timeline/Capterra.svg"]}
            className="[animation-delay:0s] [animation-duration:65s]"
          />
          <Logo
            label="Customer Support"
            srcs={["/logo-timeline/Intercom.svg","/logo-timeline/zendesk.svg","/logo-timeline/freshdesk.svg"]}
            className="[animation-delay:-32s] [animation-duration:65s]"
          />
        </Row>

        {/* Row 5: Duration 75s - Social Channels, Direct Conversations */}
        <Row>
          <Logo
            label="Social Channels"
            srcs={["/logo-timeline/x.svg","/logo-timeline/linkedin.svg","/logo-timeline/facebook.svg","/logo-timeline/Reddit.svg","/logo-timeline/youtube.svg"]}
            className="[animation-delay:0s] [animation-duration:75s]"
          />
          <Logo
            label="Direct Conversations"
            srcs={["/logo-timeline/gmail.svg","/logo-timeline/hubspot.svg","/logo-timeline/zoom.svg","/logo-timeline/Salesforce.svg"]}
            className="[animation-delay:-37s] [animation-duration:75s]"
          />
        </Row>

        {/* Row 6: Duration 55s - Community, Surveys & NPS */}
        <Row>
          <Logo
            label="Community"
            srcs={["/logo-timeline/discord.svg","/logo-timeline/slack.svg","/logo-timeline/bettermode.svg"]}
            className="[animation-delay:0s] [animation-duration:55s]"
          />
          <Logo
            label="Surveys & NPS"
            srcs={["/logo-timeline/Typeform.svg","/logo-timeline/Airtable.svg","/logo-timeline/GoogleForms.svg"]}
            className="[animation-delay:-27s] [animation-duration:55s]"
          />
        </Row>
      </div>
    </div>
  )
}
