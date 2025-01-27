import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Michael Hoang
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              Technical Support Engineer
            </h2>
            <p className="text-lg text-gray-400">
              Specializing in cloud automation and RAG-enhanced systems, with expertise in Python development and modern cloud technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-96">
            {/* Add your profile image here */}
            <div className="absolute inset-0 bg-blue-600/20 rounded-lg backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
