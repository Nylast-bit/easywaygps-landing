import { Facebook, Instagram } from "lucide-react"
import { SiteHeader } from "@/components/landing/site-header"
import { HeroTracker } from "@/components/landing/hero-tracker"
import { Faq, Features, HowItWorks, Pricing, Testimonials } from "@/components/landing/sections"
import { Contact, WhatsAppFloat } from "@/components/landing/contact"
import { site } from "@/lib/site"

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.35-2.49V9.66A5.73 5.73 0 0 0 4.1 15.3a5.73 5.73 0 0 0 5.76 5.7 5.73 5.73 0 0 0 5.73-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.29-1.48Z" />
    </svg>
  )
}

export default function Page() {
  const year = new Date().getFullYear()
  return (
    <>
      <SiteHeader />
      <main>
        <HeroTracker />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <footer className="bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-white.png" alt="EasyWayGPS" width={413} height={127} loading="lazy" className="h-12 w-auto" />
              <p className="mt-4 max-w-sm text-white/60">
                Rastreo GPS para carros, jeepetas y motores en República Dominicana. {site.tagline}.
              </p>
            </div>
            <nav aria-label="Redes sociales" className="flex gap-3">
              {[
                { href: site.social.instagram, label: "Instagram", icon: <Instagram className="h-5 w-5" aria-hidden="true" /> },
                { href: site.social.facebook, label: "Facebook", icon: <Facebook className="h-5 w-5" aria-hidden="true" /> },
                { href: site.social.tiktok, label: "TikTok", icon: <TikTok className="h-5 w-5" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`EasyWayGPS en ${s.label}`}
                  className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/20 transition hover:bg-[var(--teal)] hover:text-white hover:ring-[var(--teal)]"
                >
                  {s.icon}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:justify-between">
            <p>© {year} EasyWayGPS · {site.address.street}, {site.address.city}</p>
            <p className="font-mono text-xs">18.4861° N, 69.9312° O</p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  )
}
