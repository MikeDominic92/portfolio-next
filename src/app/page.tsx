import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="space-y-32">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="text-left space-y-8">
          <div className="relative w-32 h-32 overflow-hidden float-animation">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Michael Hoang"
                fill
                className="object-cover"
                sizes="(max-width: 128px) 100vw, 128px"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <span className="absolute -right-2 -bottom-2 text-lg">👋</span>
          </div>
          <h1 className="text-5xl font-medium gradient-text leading-tight">
            Building digital solutions with cloud automation
          </h1>
          <p className="text-gray-600 text-lg">
            Specializing in RAG-enhanced systems and cloud infrastructure
          </p>
          <div className="flex gap-4">
            <Link 
              href="#contact" 
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors hover-lift"
            >
              Let's talk →
            </Link>
            <Link 
              href="#work" 
              className="border border-gray-200 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors hover-lift"
            >
              View work
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] gradient-bg rounded-3xl overflow-hidden">
          <div className="absolute inset-0 glass p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="bg-white/90 p-6 rounded-xl hover-lift">
                <h3 className="font-medium mb-2">Cloud Infrastructure</h3>
                <p className="text-sm text-gray-600">Designing scalable solutions</p>
              </div>
              <div className="bg-white/90 p-6 rounded-xl hover-lift">
                <h3 className="font-medium mb-2">Automation</h3>
                <p className="text-sm text-gray-600">Streamlining workflows</p>
              </div>
              <div className="bg-white/90 p-6 rounded-xl hover-lift">
                <h3 className="font-medium mb-2">RAG Systems</h3>
                <p className="text-sm text-gray-600">Enhanced retrieval solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="space-y-16">
        <div className="flex flex-wrap justify-center gap-12">
          <div className="w-[120px] h-[48px] bg-gray-100 rounded-lg partner-logo hover-lift" />
          <div className="w-[120px] h-[48px] bg-gray-100 rounded-lg partner-logo hover-lift" />
          <div className="w-[120px] h-[48px] bg-gray-100 rounded-lg partner-logo hover-lift" />
          <div className="w-[120px] h-[48px] bg-gray-100 rounded-lg partner-logo hover-lift" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-medium">Services & Expertise</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Collaborate with expertise in cloud and automation to create impactful solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '💻',
              title: 'Cloud Infrastructure',
              description: 'Designing and implementing scalable cloud solutions'
            },
            {
              icon: '🤖',
              title: 'Automation',
              description: 'Building efficient automated workflows'
            },
            {
              icon: '🔍',
              title: 'RAG Systems',
              description: 'Implementing advanced retrieval systems'
            },
            {
              icon: '🛡️',
              title: 'Security',
              description: 'Ensuring robust security practices'
            }
          ].map((service, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white hover-lift glass">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl"></div>
        <div className="relative glass rounded-3xl p-16 text-center space-y-8">
          <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center hover-lift">
            <span className="text-2xl">✉️</span>
          </div>
          <h2 className="text-3xl font-medium">
            Let's create something amazing together
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Tell me about your next project and let's bring your vision to life
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="mailto:MDChoang92@gmail.com"
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors hover-lift"
            >
              Get in touch
            </Link>
            <Link 
              href="/schedule"
              className="border border-gray-200 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors hover-lift"
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
