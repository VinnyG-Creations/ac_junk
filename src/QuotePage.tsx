import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuotePage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto">
          <Link to="/" className="flex items-center gap-2 hover:text-yellow-500 transition">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      <section className="py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-3">Free Quote</h1>
        <p className="text-2xl text-gray-600 mb-4">Fast. Simple. No Pressure.</p>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Getting a quote from Annone Capital is quick and stress-free. No hidden fees, no long forms—just clear, honest pricing from a team you can trust.
        </p>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <strong className="text-xl text-gray-900">1. Tell Us What You Need</strong>
            <p className="text-gray-600 mt-2">
              A few quick details about your junk removal, moving, or painting project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <strong className="text-xl text-gray-900">2. Get Your Free Quote</strong>
            <p className="text-gray-600 mt-2">
              We'll send clear, straightforward pricing—no surprises.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <strong className="text-xl text-gray-900">3. Book When You're Ready</strong>
            <p className="text-gray-600 mt-2">
              If you like the quote, pick your date. No pressure, no commitments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Request Your Free Quote</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Service Needed:</label>
            <select
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition bg-white"
            >
              <option value="">Select a service...</option>
              <option>Junk Removal</option>
              <option>Moving / Home Rearrangement</option>
              <option>Painting</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Brief Description:</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Preferred Date (Optional):</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 text-lg font-semibold bg-gray-900 text-white rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get My Free Quote
          </button>
        </form>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Why People Love Our Quote Process</h2>
        <ul className="max-w-2xl mx-auto space-y-3 text-gray-700 text-lg">
          <li className="flex items-center gap-3">
            <span className="text-yellow-500 font-bold">✓</span>
            Fast responses
          </li>
          <li className="flex items-center gap-3">
            <span className="text-yellow-500 font-bold">✓</span>
            Easy communication
          </li>
          <li className="flex items-center gap-3">
            <span className="text-yellow-500 font-bold">✓</span>
            Transparent, honest pricing
          </li>
          <li className="flex items-center gap-3">
            <span className="text-yellow-500 font-bold">✓</span>
            No commitment required
          </li>
          <li className="flex items-center gap-3">
            <span className="text-yellow-500 font-bold">✓</span>
            Friendly, local team
          </li>
        </ul>
      </section>

      <section className="py-16 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-6">
          Let Annone Capital help make your home cleaner, brighter, and easier to enjoy.
        </p>
        <a
          href="#quote"
          className="inline-block px-8 py-4 bg-yellow-500 text-white text-lg font-semibold rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get My Free Quote Now
        </a>
      </section>
    </div>
  );
}
