import Link from "next/link";
import Image from "next/image";
import { FaCode, FaDesktop, FaMobile, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-200 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk2NTM4ODF8&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Professional profile photo" 
                width={256} 
                height={256} 
                className="w-full h-full object-cover" 
                priority 
              />
            </div>
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio002000
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl leading-relaxed">
                Crafting digital experiences with precision and creativity
              </p>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg">
                Full-stack developer passionate about building modern, scalable applications
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">About Me</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm a passionate developer with a focus on creating clean, efficient, and user-friendly applications. 
                  With experience in modern web technologies, I bring ideas to life through code.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My journey in development has taught me the importance of attention to detail, continuous learning, 
                  and delivering solutions that make a real impact.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Node.js</span>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk2NTM4ODJ8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Developer workspace" 
                  width={500} 
                  height={400} 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="p-4 rounded-full bg-indigo-100 w-fit mx-auto mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                  <FaCode className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Frontend Development</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Creating responsive and interactive user interfaces with modern frameworks and libraries.
                </p>
              </div>
              <div className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="p-4 rounded-full bg-indigo-100 w-fit mx-auto mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                  <FaDesktop className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Web Applications</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Building full-stack web applications with seamless user experiences and robust backends.
                </p>
              </div>
              <div className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="p-4 rounded-full bg-indigo-100 w-fit mx-auto mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                  <FaMobile className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Responsive Design</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Ensuring optimal user experience across all devices with mobile-first design principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                A showcase of my recent work and creative solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://picsum.photos/seed/portoflio002000/800/600" 
                    alt="Project showcase" 
                    width={600} 
                    height={400} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Modern Web Application</h3>
                  <p className="text-gray-600 mb-4">
                    A full-stack application built with modern technologies and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">React</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">Tailwind CSS</span>
                  </div>
                </div>
              </div>
              <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1573166675921-076ea6b621ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk2NTM4ODh8&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Project showcase" 
                    width={600} 
                    height={400} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Responsive Portfolio</h3>
                  <p className="text-gray-600 mb-4">
                    A clean and professional portfolio website with smooth animations and mobile optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">Next.js</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">CSS3</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-indigo-600 bg-white px-8 text-sm font-medium text-indigo-600 shadow-sm transition-all duration-300 hover:bg-indigo-50 hover:shadow-md hover:-translate-y-1"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="w-full py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm here to help you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-indigo-600 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaEnvelope className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-full bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}