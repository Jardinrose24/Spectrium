"use client"

import { useState, useEffect } from "react"

const wallpapers = [
  { src: "/wallpapers/Spectrium Emerald.png", alt: "" },
  { src: "/wallpapers/Spectrium blue.png", alt: "" },
  { src: "/wallpapers/Spectrium burbon.png", alt: "" },
  { src: "/wallpapers/Spectrium joker.png", alt: "" },
  { src: "/wallpapers/Spectrium red.png", alt: "" },
]

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [selected])

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <span className="text-sm font-semibold uppercase tracking-widest">
          Spectrium
        </span>
        <nav className="hidden items-center gap-8 sm:flex">
          <a
            href="#preview"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Preview
          </a>
          <a
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#download"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Download
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          A Wallpaper Pack by Consumer Logic
        </p>
        <h1 className="text-balance text-6xl font-bold leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Spectrium
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          Premium desktop & Mac wallpapers. Clean, cinematic, modern.
        </p>
        <a
          href="https://jardinrose24.itch.io/spectrium"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
          </svg>
          Download the Pack
        </a>
        <div className="absolute bottom-12 animate-bounce">
          <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      <div className="mx-auto max-w-7xl"><div className="mx-6 border-t border-border" /></div>

      {/* Preview Grid */}
      <section id="preview" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Preview
          </p>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            The Collection
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {wallpapers.map((wp, i) => (
              <button
                key={wp.src}
                onClick={() => setSelected(i)}
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-border bg-secondary"
              >
                <img
                  src={wp.src}
                  alt={wp.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/10" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl"><div className="mx-6 border-t border-border" /></div>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Crafted with Care
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            Spectrium is a curated collection of premium desktop wallpapers
            designed to elevate your workspace with clean, cinematic, and modern
            visuals.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-muted-foreground/20">
              <svg className="mb-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold">High Resolution</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every wallpaper is crafted at ultra-high resolution for crisp, stunning detail on any display.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-muted-foreground/20">
              <svg className="mb-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold">Designed for Mac & Desktop</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Optimized for macOS desktops and widescreen monitors. Looks perfect on Retina displays.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-muted-foreground/20">
              <svg className="mb-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold">Clean & Cinematic</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Modern visuals with a cinematic quality. Minimal, bold, and designed to complement your workspace.
              </p>
            </div>
          </div>
          <p className="mt-16 text-center text-sm font-medium tracking-wide text-muted-foreground">
            No AI was used in the creation of these wallpapers.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl"><div className="mx-6 border-t border-border" /></div>

      {/* Download */}
      <section id="download" className="px-6 py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to transform your desktop?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            Download the full Spectrium wallpaper pack and give your workspace
            the upgrade it deserves.
          </p>
          <a
            href="https://jardinrose24.itch.io/spectrium"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-10 py-4 text-base font-medium text-background transition-opacity hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
            </svg>
            Download the Spectrium Wallpaper Pack
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            {"© Consumer Logic"}
          </p>
          <p className="text-xs text-muted-foreground/60">
            No AI was used in the creation of these wallpapers.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Wallpaper preview"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close preview"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative aspect-video w-full max-w-5xl px-6">
            <img
              src={wallpapers[selected].src}
              alt={wallpapers[selected].alt}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      )}
    </main>
  )
}
