'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-8">
      <main className="max-w-2xl mx-auto w-full">
        <h1 className="text-6xl font-bold mb-8">aman khan</h1>
        <nav>
          <ul className="space-y-2 text-xl">
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">Products I&apos;ve worked on</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">Blog Posts</Link>
            </li>
            <li>
              <Link href="/investments" className="hover:underline">Companies I&apos;ve invested in</Link>
            </li>
          </ul>
        </nav>

        <section className="mt-12">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <ul className="space-y-2 text-xl">
            <li>
              <a href="https://www.linkedin.com/in/amankhan" className="hover:underline inline-flex items-center">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/amankhan" className="hover:underline inline-flex items-center">
                <Twitter className="mr-2 h-5 w-5" />
                X
              </a>
            </li>
            <li>
              <a href="mailto:myfirstname@vectorventures.xyz" className="hover:underline">
                myfirstname@vectorventures.xyz
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="fixed bottom-4 left-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle dark mode"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </footer>
    </div>
  )
}