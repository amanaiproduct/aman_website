'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div className="bg-blue-500 dark:bg-blue-600 text-white p-4 text-center">
        <a 
          href="https://maven.com/aman-khan/thriving-as-an-ai-pm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline inline-flex items-center justify-center gap-2 text-lg font-medium"
        >
          Check out my course &quot;Prototype to Production: The AI PM Playbook&quot;
          <span className="text-blue-100">→</span>
        </a>
      </div>
      
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-8">
        <main className="max-w-2xl mx-auto w-full">
          <h1 className="text-6xl font-bold mb-8">aman khan</h1>
          <nav>
            <ul className="space-y-2 text-xl">
              <li>
                <Link href="/products" className="hover:underline">Products I&apos;ve worked on</Link>
              </li>
              <li>
                <Link 
                  href="https://aiproductplaybook.com" 
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link 
                  href="https://knowing-headlight-107.notion.site/Vector-Ventures-Fund-I-13d3f06734608031bb26d3cceea37dee?pvs=4" 
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Companies I&apos;ve invested in
                </Link>
              </li>
            </ul>
          </nav>

          <section className="mt-12">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2 text-xl">
              <li>
                <a 
                  href="https://www.linkedin.com/in/amanberkeley" 
                  className="hover:underline inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/amankhan" 
                  className="hover:underline inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-5 w-5" />
                  X
                </a>
              </li>
              <li>
                <a 
                  href="mailto:firstname@aiproductplaybook.com" 
                  className="hover:underline"
                >
                  &lt;firstname&gt;@aiproductplaybook.com
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-4xl font-bold mb-6">Speaking</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                <div className="flex items-start gap-3">
                  <img 
                    src="https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F441213db-4824-4e48-9d28-a3a18952cbfc_592x592.png" 
                    alt="Lenny's Newsletter"
                    className="w-10 h-10 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Lenny&apos;s Newsletter</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Deep dive on building AI products, evaluations, and the future of PM</p>
                    <div className="space-y-1">
                      <a 
                        href="https://www.youtube.com/watch?v=E_rNotqs--I" 
                        className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → YouTube Interview
                      </a>
                      <a 
                        href="https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" 
                        className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → Beyond Vibe Checks: A PM&apos;s Complete Guide
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                <div className="flex items-start gap-3">
                  <img 
                    src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd2dbd75e-1c5a-48ab-94ef-b24caea63cdf_1024x1024.png" 
                    alt="Peter Yang"
                    className="w-10 h-10 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Peter Yang</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Product management strategies and AI integration in products</p>
                    <a 
                      href="https://www.youtube.com/watch?v=u8lEDw7pOkE&t=2379s" 
                      className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      → YouTube Interview
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                <div className="flex items-start gap-3">
                  <img 
                    src="https://substackcdn.com/image/fetch/w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F266f66c3-ca9f-4c0b-93a7-b1dc6ed89901_512x512.png" 
                    alt="Aakash Gupta"
                    className="w-10 h-10 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Aakash Gupta</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Product growth strategies and scaling AI products</p>
                    <a 
                      href="https://www.news.aakashg.com/p/aman-khan-podcast" 
                      className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      → Product Growth Podcast
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                <div className="flex items-start gap-3">
                  <img 
                    src="https://yt3.googleusercontent.com/91zElxE2d20UXhsFWobw-z-L6oVIaZs88jK5ojx1LAk6V_9s4IIaCA9VqqN_Jw3WkgW_VEpN=s160-c-k-c0x00ffffff-no-rj" 
                    alt="Hamel Husain"
                    className="w-10 h-10 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Hamel Husain</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Building evaluation systems for AI applications</p>
                    <a 
                      href="https://www.youtube.com/watch?v=XueTa4qrMpg" 
                      className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      → Evals Course Interview
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                <div className="flex items-start gap-3">
                  <img 
                    src="https://www.deeplearning.ai/favicon.ico" 
                    alt="DeepLearning.AI"
                    className="w-10 h-10 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">DeepLearning.AI</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Teaching AI agent evaluation techniques to developers</p>
                    <div className="space-y-1">
                      <a 
                        href="https://www.deeplearning.ai/short-courses/evaluating-ai-agents/" 
                        className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → Evaluating AI Agents Course
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=GzxdGpFhn04" 
                        className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → Course Launch Interview
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center text-white font-bold">
                    MP
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Mind The Product</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Frameworks for thriving as an AI product manager</p>
                    <a 
                      href="https://www.mindtheproduct.com/how-to-thrive-as-an-ai-product-manager-aman-khan-director-of-product-arize-ai/" 
                      className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      → How to Thrive as an AI Product Manager
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                <div className="flex items-start gap-3">
                  <img 
                    src="https://github.githubassets.com/favicons/favicon.svg" 
                    alt="GitHub"
                    className="w-10 h-10 rounded dark:bg-white p-1"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Arize AI & GitHub</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">The future of AI product management and best practices</p>
                    <div className="space-y-1">
                      <a 
                        href="https://www.youtube.com/watch?v=1raJngrn_Jk" 
                        className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → Navigating the Future of AI Product Management
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=Ms1n15uTL8o" 
                        className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → Building AI Products at Scale
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=v0eTTn7ZPEc" 
                        className="hover:underline text-blue-600 dark:text-blue-400 text-sm block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        → AI PM Best Practices
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  )
}
