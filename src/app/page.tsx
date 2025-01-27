import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="space-y-32">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="text-left space-y-8">
          <div className="relative w-32 h-32 overflow-hidden float-animation">
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Michael Hoang"
                fill
                className="object-cover"
                sizes="(max-width: 128px) 100vw, 128px"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <span className="absolute -right-2 -bottom-2 text-2xl">👋</span>
          </div>
          <h1 className="text-5xl font-medium gradient-text leading-tight">
            Michael Hoang
          </h1>
          <p className="text-xl text-gray-600">
            Technical Support Engineer specializing in cloud automation and RAG-enhanced systems
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact" 
              className="primary-button px-8 py-4 rounded-full"
            >
              Let's talk →
            </Link>
            <Link 
              href="/resume/michael-hoang-resume.pdf"
              className="secondary-button px-8 py-4 rounded-full"
              target="_blank"
            >
              View Resume
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <a href="mailto:mdcheung92@gmail.com" className="hover:text-gray-900 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              mdcheung92@gmail.com
            </a>
            <a href="tel:+1-610-741-8676" className="hover:text-gray-900 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1-610-741-8676
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              New York
            </span>
          </div>
        </div>
        <div className="relative h-[500px] gradient-bg rounded-3xl overflow-hidden">
          <div className="absolute inset-0 glass p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="bg-white/90 p-6 rounded-xl hover-lift">
                <h3 className="font-medium mb-2">Current Role</h3>
                <p className="text-sm text-gray-600">Technical Support Engineer at AlgoPro Solutions</p>
              </div>
              <div className="bg-white/90 p-6 rounded-xl hover-lift">
                <h3 className="font-medium mb-2">Experience Highlights</h3>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Enhanced system efficiency by 40%</li>
                  <li>Reduced issue resolution time by 50%</li>
                  <li>Achieved 99.9% system uptime</li>
                </ul>
              </div>
              <div className="bg-white/90 p-6 rounded-xl hover-lift">
                <h3 className="font-medium mb-2">Education</h3>
                <p className="text-sm text-gray-600">Computer Science & Applied Mathematics<br/>The Pennsylvania State University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-medium">Skills & Expertise</h2>
          <p className="text-gray-600">Specialized in cloud automation and technical support</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white hover-lift glass">
            <h3 className="font-medium mb-4">Cloud & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white hover-lift glass">
            <h3 className="font-medium mb-4">Development</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PowerShell', 'CI/CD', 'Git', 'Jenkins', 'ServiceNow'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white hover-lift glass">
            <h3 className="font-medium mb-4">Security</h3>
            <div className="flex flex-wrap gap-2">
              {['Cisco CCNA', 'CompTIA Sec+', 'AWS Certified', 'Vulnerability Testing'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-medium">Work Experience</h2>
        </div>
        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-white hover-lift glass">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium">Technical Support Engineer</h3>
                <p className="text-gray-600">AlgoPro Solutions</p>
              </div>
              <span className="text-sm text-gray-500">Jan 2021 - Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Enhanced system efficiency by 40% through Python-based automation</li>
              <li>Reduced issue resolution time by 50% using RAG models</li>
              <li>Achieved 99.9% system uptime with Kubernetes and Docker</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl"></div>
        <div className="relative glass rounded-3xl p-16 text-center space-y-8">
          <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center hover-lift">
            <span className="text-2xl">✉️</span>
          </div>
          <h2 className="text-3xl font-medium">Let's Connect</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Looking to enhance your technical support or automation solutions? Let's discuss how I can help.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="mailto:mdcheung92@gmail.com"
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors hover-lift"
            >
              Email Me
            </Link>
            <Link 
              href="https://linkedin.com/in/mdhlee-5ad649248"
              className="border border-gray-200 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors hover-lift"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
