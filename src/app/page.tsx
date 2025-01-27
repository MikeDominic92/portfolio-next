import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="space-y-32">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="relative w-32 h-32 mx-auto mb-8 overflow-hidden">
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
        <h1 className="text-4xl font-medium max-w-2xl mx-auto gradient-text">
          Building digital solutions with cloud automation and RAG-enhanced systems
        </h1>
        <Link 
          href="#contact" 
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Let's talk →
        </Link>
      </section>

      {/* Partners Section */}
      <section className="space-y-16">
        <div className="flex justify-center gap-12">
          <div className="w-[100px] h-[40px] bg-gray-100 rounded partner-logo" />
          <div className="w-[100px] h-[40px] bg-gray-100 rounded partner-logo" />
          <div className="w-[100px] h-[40px] bg-gray-100 rounded partner-logo" />
          <div className="w-[100px] h-[40px] bg-gray-100 rounded partner-logo" />
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-8 text-center">
        <h2 className="text-2xl font-medium">
          Collaborate with expertise in cloud and automation
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          to create impactful solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
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
            <div key={index} className="space-y-4 group border border-gray-200 p-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-200">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="font-medium">{service.title}</h3>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center space-y-8">
        <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto flex items-center justify-center border border-gray-200">
          <span className="text-2xl">✉️</span>
        </div>
        <h2 className="text-2xl font-medium">
          Tell me about your next project
        </h2>
        <div className="flex justify-center gap-4">
          <Link 
            href="mailto:MDChoang92@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Let's discuss
          </Link>
          <Link 
            href="/schedule"
            className="border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Schedule a call
          </Link>
        </div>
      </section>
    </main>
  );
}
