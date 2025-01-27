import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-24">
          <Link href="mailto:mdcheung92@gmail.com" className="text-sm hover:text-gray-600">
            mdcheung92@gmail.com
          </Link>
          <div className="flex gap-8">
            <Link href="/case" className="text-sm hover:text-gray-600">Case</Link>
            <Link href="/cv" className="text-sm hover:text-gray-600">CV</Link>
          </div>
          <div className="flex gap-8">
            <Link href="/linkedin" className="text-sm hover:text-gray-600">LinkedIn</Link>
            <Link href="/dribbble" className="text-sm hover:text-gray-600">Dribbble</Link>
            <Link href="/instagram" className="text-sm hover:text-gray-600">Instagram</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-32">
          <div className="relative w-24 h-24 mx-auto mb-8 profile-tooltip">
            <Image
              src="/images/profile.jpg"
              alt="Michael Hoang"
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 96px) 100vw, 96px"
            />
          </div>
          <h1 className="text-4xl font-normal mb-4">
            Building digital<br />
            products, brands, and<br />
            experience.
          </h1>
          <Link 
            href="#contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-all"
          >
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
        <section className="text-center mb-32">
          <h2 className="text-2xl mb-16">
            Collaborate with brands and agencies<br />
            to create impactful results.
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="text-left">
              <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <Image src="/icons/ux.svg" alt="UX & UI" width={24} height={24} />
              </div>
              <h3 className="text-lg mb-2">UX & UI</h3>
              <p className="text-sm text-gray-600">Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
            </div>
            <div className="text-left">
              <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <Image src="/icons/mobile.svg" alt="Mobile" width={24} height={24} />
              </div>
              <h3 className="text-lg mb-2">Web & Mobile App</h3>
              <p className="text-sm text-gray-600">Building responsive and dynamic web and mobile applications.</p>
            </div>
            <div className="text-left">
              <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <Image src="/icons/design.svg" alt="Design" width={24} height={24} />
              </div>
              <h3 className="text-lg mb-2">Design & Creative</h3>
              <p className="text-sm text-gray-600">Crafting unique branding and creative solutions.</p>
            </div>
            <div className="text-left">
              <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <Image src="/icons/dev.svg" alt="Development" width={24} height={24} />
              </div>
              <h3 className="text-lg mb-2">Development</h3>
              <p className="text-sm text-gray-600">Bringing your ideas to life with the latest technology.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl mb-8">
            Tell me about your<br />
            next project
          </h2>
          <Link 
            href="mailto:mdcheung92@gmail.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-all"
          >
            Let's Talk →
          </Link>
        </section>
      </div>
    </main>
  )
}
