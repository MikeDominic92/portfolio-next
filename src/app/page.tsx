import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header Navigation */}
      <nav className="flex justify-center items-center gap-8 py-8">
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
      <section className="pt-4 pb-16">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative w-32 h-32 mx-auto mb-8 profile-tooltip" data-tooltip="Ain't he handsome! 😎">
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="profile-image-container">
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <Link 
                  href="https://www.linkedin.com/in/mdhlee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Michael Hoang"
                    width={128}
                    height={128}
                    className="rounded-full profile-image"
                    priority
                  />
                </Link>
              </div>
            </div>
            
            <h1 className="hero-title relative inline-block mb-8">
              <span className="text-primary block text-5xl md:text-6xl font-bold mb-6">
                <span className="text-slate-700">Have No</span>{' '}
                <span className="text-orange-500">Fear</span>
              </span>
              <span className="hero-neutral block text-xl md:text-2xl mx-auto max-w-lg">
                Your Technical Guardian Angel
              </span>
              <span className="hero-gradient inline-block text-3xl md:text-4xl font-bold mt-6">
                <span className="text-slate-700">Is</span>{' '}
                <span className="text-orange-500">Here</span>
              </span>
            </h1>

            <p className="hero-description max-w-lg mx-auto mb-6 text-base text-gray-600 leading-relaxed">
              Technical Support Engineer who thrives on solving the unsolvable. From cloud automation to system optimization, 
              keeping your systems running while you keep running your business 🎯
            </p>

            <div className="button-group">
              <Link
                href="https://github.com/MikeDominic92"
                target="_blank"
                className="hero-button" 
                style={{"--btn-index": 0} as any}
              >
                <div className="button-sparkle"></div>
                <div className="button-sparkle"></div>
                <span className="flex items-center gap-2">
                  My Work
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </span>
              </Link>
              <Link
                href="mailto:mdcheung92@gmail.com"
                className="hero-button secondary" 
                style={{"--btn-index": 1} as any}
              >
                <div className="button-sparkle"></div>
                <div className="button-sparkle"></div>
                <span className="flex items-center gap-2">
                  Let's Chat
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="need-help-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">
            Need <span className="font-semibold">Help?</span>
          </h2>
          <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
            From troubleshooting complex systems to implementing automated solutions, 
            I'm here to transform your technical challenges into success stories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="service-card p-8">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl mb-3">Diagnose</h3>
              <p className="text-gray-600">Quick and accurate problem identification</p>
            </div>
            <div className="service-card p-8">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl mb-3">Solve</h3>
              <p className="text-gray-600">Efficient and effective solutions</p>
            </div>
            <div className="service-card p-8">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl mb-3">Optimize</h3>
              <p className="text-gray-600">Continuous improvement and automation</p>
            </div>
          </div>
          <Link 
            href="mailto:mdcheung92@gmail.com"
            className="hero-button inline-block text-white px-8 py-4 rounded-full text-sm"
          >
            <span>Let's Talk</span> <span className="ml-1">→</span>
          </Link>
        </div>
      </section>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-8 py-8">
        <Link 
          href="https://www.linkedin.com/in/mdhlee/" 
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
    </main>
  )
}
