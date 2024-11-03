import React from 'react';
import { Code2, Cpu, Globe2, Rocket, Users2, MessageSquare, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="absolute w-full z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Tacdigitals</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#work" className="text-gray-300 hover:text-white transition">Work</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
              Get Started
            </button>
          </div>
        </nav>

        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Transform Your</span>
                  <span className="block text-blue-400">Digital Presence</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  We craft innovative digital solutions that help businesses thrive in the modern world. From web applications to mobile solutions, we bring your ideas to life.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                  <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-xl text-gray-400">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe2, title: 'Web Development', desc: 'Custom websites and web applications built with modern technologies' },
              { icon: Cpu, title: 'Software Development', desc: 'Scalable software solutions tailored to your business needs' },
              { icon: Users2, title: 'Digital Transformation', desc: 'Help businesses adapt and thrive in the digital age' },
            ].map((service, index) => (
              <div key={index} className="relative group bg-slate-900 p-8 rounded-xl hover:bg-slate-700 transition">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative">
                  <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: '100+', label: 'Clients' },
              { number: '250+', label: 'Projects' },
              { number: '15+', label: 'Team Members' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400">{stat.number}</div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-xl text-gray-400">Let's discuss your next project</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-900 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-slate-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-slate-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-slate-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                <p className="text-gray-400">Ready to start your project? Contact us for a free consultation.</p>
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">hello@tacdigitals.com</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">Tacdigitals</span>
              </div>
              <p className="mt-4 text-gray-400">Building digital solutions for tomorrow's challenges.</p>
            </div>
            {['Company', 'Services', 'Resources'].map((title, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        {title} Link {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">© 2024 Tacdigitals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;