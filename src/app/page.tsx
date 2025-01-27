import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Navigation */}
        <nav className="flex justify-center items-center gap-8 mb-24">
          <Link href="mailto:mdcheung92@gmail.com" className="text-sm hover:text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            mdcheung92@gmail.com
          </Link>
          <span className="text-sm text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            New York
          </span>
          <Link 
            href="/resume/michael-hoang-resume.pdf" 
            target="_blank"
            className="text-sm hover:text-gray-600 flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-32">
          <div className="relative w-32 h-32 mx-auto mb-8 profile-tooltip">
            <Image
              src="/images/profile.jpg"
              alt="Michael Hoang"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6">
            If you have a technical problem, and no one else can help... ✨
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Technical Support Engineer who thrives on solving the unsolvable. From cloud automation to system optimization, 
            I'm the person you call when things get challenging. Making systems 40% faster is just the beginning.
          </p>
          <Link href="#contact" className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-all">
            Learn More →
          </Link>
        </section>

        {/* Partners Section */}
        <section className="mb-32">
          <div className="grid grid-cols-6 gap-12 items-center opacity-60">
            <Image src="/images/partners/national-bank.svg" alt="National Bank" width={120} height={40} />
            <Image src="/images/partners/mattered.svg" alt="Mattered" width={120} height={40} />
            <Image src="/images/partners/coca-cola.svg" alt="Coca Cola" width={120} height={40} />
            <Image src="/images/partners/adobe.svg" alt="Adobe" width={120} height={40} />
            <Image src="/images/partners/subway.svg" alt="Subway" width={120} height={40} />
            <Image src="/images/partners/codecademy.svg" alt="Codecademy" width={120} height={40} />
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Core Competencies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <Image src="/icons/ux.svg" alt="Cloud & VPS" width={40} height={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud & VPS</h3>
              <p className="text-gray-600">AWS, GCP, Azure with Kubernetes, Docker, and Terraform expertise.</p>
            </div>
            <div className="p-6">
              <Image src="/icons/mobile.svg" alt="Technical Support" width={40} height={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Technical Support</h3>
              <p className="text-gray-600">Windows, Linux environments, troubleshooting, and escalation management.</p>
            </div>
            <div className="p-6">
              <Image src="/icons/design.svg" alt="Automation" width={40} height={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Automation</h3>
              <p className="text-gray-600">Python automation, RAG models, Bash scripting, and PowerShell expertise.</p>
            </div>
            <div className="p-6">
              <Image src="/icons/dev.svg" alt="Development" width={40} height={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-600">CI/CD pipelines with Jenkins, GitHub Actions, and GitLab CI/CD.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-gray-600">System Efficiency Boost</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-gray-600">System Uptime</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-2">50%</div>
              <p className="text-gray-600">Faster Issue Resolution</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold mb-8">Tell me about your next project</h2>
          <Link href="mailto:mdcheung92@gmail.com" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Let's Talk →
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mt-24">
          <Link 
            href="https://linkedin.com/in/mdhlee" 
            target="_blank" 
            className="hover:text-gray-600 transition-colors"
          >
            <Image 
              src="/icons/linkedin.svg" 
              alt="LinkedIn" 
              width={24} 
              height={24} 
              className="hover:scale-110 transition-transform"
            />
          </Link>
          <Link 
            href="https://github.com/MikeDominic92" 
            target="_blank" 
            className="hover:text-gray-600 transition-colors"
          >
            <Image 
              src="/icons/github.svg" 
              alt="GitHub" 
              width={24} 
              height={24} 
              className="hover:scale-110 transition-transform"
            />
          </Link>
          <Link 
            href="mailto:mdcheung92@gmail.com" 
            className="hover:text-gray-600 transition-colors"
          >
            <Image 
              src="/icons/gmail.svg" 
              alt="Email" 
              width={24} 
              height={24} 
              className="hover:scale-110 transition-transform"
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
