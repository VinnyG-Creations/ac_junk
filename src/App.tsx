import React, { useState } from 'react';
import { Home, Truck, Package, Facebook, Instagram, Linkedin, ArrowRight, Star, Menu, Paintbrush } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white md:hidden"
          >
            <Menu size={24} />
          </button>
          <button 
            onClick={() => scrollToSection('hero')} 
            className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500 hover:border-yellow-400 transition-colors duration-300 flex-shrink-0"
          >
            <img 
              src="/assets/Screenshot%202025-05-19%20210522.png" 
              alt="Annone Capital Logo" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8 absolute md:relative left-0 right-0 top-16 md:top-0 bg-black md:bg-transparent p-4 md:p-0 z-50`}>
            <button onClick={() => scrollToSection('hero')} className="block md:inline text-white hover:text-yellow-500 transition py-2 md:py-0 text-left">Home</button>
            <button onClick={() => scrollToSection('services')} className="block md:inline text-white hover:text-yellow-500 transition py-2 md:py-0 text-left">Our Services</button>
            <button onClick={() => scrollToSection('about')} className="block md:inline text-white hover:text-yellow-500 transition py-2 md:py-0 text-left">About Us</button>
            <button onClick={() => scrollToSection('testimonials')} className="block md:inline text-white hover:text-yellow-500 transition py-2 md:py-0 text-left">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="block md:inline text-white hover:text-yellow-500 transition py-2 md:py-0 text-left">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex flex-col justify-between"
        style={{
          backgroundImage: 'url(/assets/Screenshot%202025-05-19%20210522.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Typewriter text at top */}
        <div className="container mx-auto px-6 pt-12 z-10">
          <h1 className="text-5xl md:text-7xl font-serif text-white text-center font-bold">
            <Typewriter
              options={{
                strings: ['Creating a better community'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>
        </div>

        {/* Free Estimates button at bottom */}
        <div className="container mx-auto px-6 pb-24 z-10 text-center">
          <button
            onClick={() => navigate('/quote')}
            className="bg-yellow-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Free Estimates
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-16">
            Professional moving, home rearrangement, junk removal, and custom painting services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Moving Services Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-yellow-300">
              <div className="text-yellow-500 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                  <Truck size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Professional Moving</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Full-service residential and commercial moving with careful handling of your belongings and efficient transportation.
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Local and long-distance moves</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Professional packing services</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Furniture disassembly/assembly</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Insured and bonded service</span>
                </li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 text-sm font-medium mt-4">
                Learn More
              </button>
            </div>

            {/* Home Rearrangement Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-yellow-300">
              <div className="text-yellow-500 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                  <Home size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Home Rearrangement</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Transform your living space with our professional home rearrangement and interior organization services.
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Room layout optimization</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Furniture repositioning</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Storage solutions design</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Decluttering assistance</span>
                </li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 text-sm font-medium mt-4">
                Learn More
              </button>
            </div>

            {/* Junk Removal Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-yellow-300">
              <div className="text-yellow-500 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                  <Package size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Junk Removal</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Hassle-free junk removal services for residential and commercial properties.
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Fast and reliable pickup</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Eco-friendly disposal</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Affordable pricing</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Same-day service available</span>
                </li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 text-sm font-medium mt-4">
                Learn More
              </button>
            </div>

            {/* Custom Painting Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-yellow-300">
              <div className="text-yellow-500 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                  <Paintbrush size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Custom Painting</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Professional interior and exterior painting services to refresh and transform your home with quality craftsmanship.
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Interior and exterior painting</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Color consultation services</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Surface preparation and priming</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                  <span className="text-gray-700">Premium paint and materials</span>
                </li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 text-sm font-medium mt-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-black py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Us</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-12">Creating a Better Community</h3>

          <div className="max-w-4xl mx-auto text-left">
            <div className="bg-gray-900 rounded-xl p-8 mb-12 shadow-xl border border-gray-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Annone Capital (AC), we believe that when homes are well cared for, communities thrive. Every room we paint, every item we move, and every space we clear out is part of our bigger mission — creating a better community, one home at a time.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We specialize in junk removal, home rearrangement, moving, and painting services designed to bring comfort, order, and beauty back to your living space. But more than that, we're a team that values people — not just projects. From the first call to the final touch, our goal is to make the experience smooth, respectful, and reliable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full mr-3"></div>
                  Our Story
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Annone Capital was built on a simple idea: small improvements make a big impact. We started by helping local homeowners reclaim their spaces — and quickly grew into a trusted name for quality work, honest service, and lasting results.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, our mission remains the same: to help people feel more at home in the places they love while strengthening the communities we serve.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full mr-3"></div>
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To provide reliable, high-quality home services that simplify life, uplift spaces, and support the communities we're proud to be part of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-center mb-16">
            Don't just take our word for it - hear from our satisfied customers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The moving team was incredibly professional and handled our belongings with such care. 
                They made our cross-town move completely stress-free and everything arrived in perfect condition."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Amazing home rearrangement service! They completely transformed our cluttered living room 
                into a beautifully organized and functional space. We love our 'new' home!"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Quick and professional junk removal! They cleared out years of accumulated items from 
                our garage and basement. The team was courteous and left everything spotless."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Lisa Martinez</h4>
                  <p className="text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-8">
            Get in touch today for professional moving, home rearrangement, or stress-free junk removal.
          </p>
          <div className="space-y-4">
            <button onClick={() => navigate('/quote')} className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition block mx-auto">
            Get a Free Quote
          </button>
            <div className="text-gray-300">
              <p>Email: info@annonecapital.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif text-yellow-500 mb-4">Annone Capital</h3>
              <p className="text-gray-400">
                Transforming spaces and ensuring security across the community.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('hero')} className="block text-gray-400 hover:text-white transition text-left">Home</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition text-left">Services</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition text-left">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@annonecapital.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>123 Business Street, Suite 100<br />City, State 12345</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;