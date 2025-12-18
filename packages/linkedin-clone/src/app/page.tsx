'use client';

import { useState } from 'react';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Store user in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to profile setup
      window.location.href = '/profile-setup';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Linked</h1>
          <div className="flex gap-4 items-center">
            <button className="text-gray-600 hover:text-gray-900 font-medium">Sign in</button>
            <button className="bg-transparent border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Join now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl font-light text-gray-900 mb-6 leading-tight">
              Welcome to your professional community
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with the right people, discover career opportunities, and build your professional brand.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get started - it&apos;s free
            </h3>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="6+ characters"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Agree & Join
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            Explore what you can do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect with professionals</h3>
              <p className="text-gray-600">
                Build meaningful relationships with people in your industry and expand your network globally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Find your dream job</h3>
              <p className="text-gray-600">
                Discover opportunities tailored to your skills and get noticed by top recruiters and companies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Build your brand</h3>
              <p className="text-gray-600">
                Share your expertise, showcase your work, and establish yourself as a thought leader in your field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Join millions of professionals
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Stay informed</h3>
                    <p className="text-gray-600">Get the latest industry news and insights from leaders in your field.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Grow your career</h3>
                    <p className="text-gray-600">Access learning resources and career development opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Make an impact</h3>
                    <p className="text-gray-600">Share your knowledge and help others succeed in their careers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">500M+</div>
                <p className="text-gray-600 mb-8">Professionals worldwide</p>
                <div className="text-5xl font-bold text-purple-600 mb-2">10M+</div>
                <p className="text-gray-600 mb-8">Job opportunities</p>
                <div className="text-5xl font-bold text-green-600 mb-2">50K+</div>
                <p className="text-gray-600">Companies hiring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-white text-center mb-16">
            What our members say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Product Manager</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;This platform helped me land my dream job. The connections I made here were invaluable.&quot;
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">Software Engineer</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;I&apos;ve grown my network exponentially and learned so much from industry leaders.&quot;
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                  <div className="text-sm text-gray-600">Marketing Director</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;The best platform for professional networking. It&apos;s changed how I approach my career.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            How it works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create your profile</h3>
              <p className="text-gray-600">
                Sign up in seconds and build a professional profile that showcases your experience and skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect & network</h3>
              <p className="text-gray-600">
                Find and connect with colleagues, industry leaders, and potential employers in your field.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Share & engage</h3>
              <p className="text-gray-600">
                Post updates, share insights, and engage with content that matters to your professional growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grow your career</h3>
              <p className="text-gray-600">
                Discover opportunities, learn new skills, and advance your career with the right connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-4">
            Choose your plan
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Start free and upgrade as you grow
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $0<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Basic profile & networking</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Job search & applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Connect with professionals</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                Get started
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-purple-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $29<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Everything in Free</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">See who viewed your profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced search filters</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">InMail messages</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Start free trial
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Business</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $59<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Everything in Premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Unlimited InMail credits</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Company page analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            Success stories
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Alex Thompson</div>
                  <div className="text-gray-600">Senior Developer at TechCorp</div>
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">
                &quot;I went from junior developer to senior in just 2 years thanks to the connections and opportunities I found here.&quot;
              </p>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>📈 3x salary increase</span>
                <span>🎯 Dream job achieved</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Jessica Martinez</div>
                  <div className="text-gray-600">Founder of StartupX</div>
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">
                &quot;I found my co-founder and first investors through this platform. It changed my life.&quot;
              </p>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>💰 $2M raised</span>
                <span>🚀 Company launched</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is it really free?</h3>
              <p className="text-gray-600">
                Yes! Our basic plan is completely free forever. You can upgrade to Premium or Business plans for additional features, but you&apos;ll always have access to core networking and job search features at no cost.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I get started?</h3>
              <p className="text-gray-600">
                Simply sign up with your email, create your professional profile, and start connecting with people in your industry. It takes less than 5 minutes to get started.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I cancel my premium subscription anytime?</h3>
              <p className="text-gray-600">
                Absolutely! You can cancel your premium subscription at any time with no penalties. You&apos;ll continue to have access until the end of your billing period.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I find job opportunities?</h3>
              <p className="text-gray-600">
                Use our advanced job search filters to find opportunities that match your skills and preferences. You can also set up job alerts to get notified when relevant positions are posted.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is my data secure?</h3>
              <p className="text-gray-600">
                Yes! We use industry-standard encryption and security practices to protect your data. Your privacy is our top priority, and we never sell your information to third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                About our mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves access to economic opportunity. Our platform connects professionals worldwide, breaking down barriers and creating pathways to success.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2024, we&apos;ve grown to serve millions of professionals across 200+ countries and territories. Our team is dedicated to building the world&apos;s most trusted professional network.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">500M+</div>
                  <div className="text-gray-600">Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">50K+</div>
                  <div className="text-gray-600">Companies</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Members first</div>
                    <div className="text-gray-600 text-sm">Everything we do is for our members&apos; success</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Trust & transparency</div>
                    <div className="text-gray-600 text-sm">We build trust through honest communication</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Innovation</div>
                    <div className="text-gray-600 text-sm">We constantly evolve to serve you better</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-4">
            Integrations & partners
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Connect with the tools you already use
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-gray-900">Slack</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-gray-900">Microsoft</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-gray-900">Google</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-gray-900">Salesforce</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              View all 50+ integrations →
            </button>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            Your security is our priority
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bank-level encryption</h3>
              <p className="text-gray-600">
                Your data is protected with 256-bit SSL encryption, the same security used by financial institutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy controls</h3>
              <p className="text-gray-600">
                You control who sees your information. Customize your privacy settings to match your comfort level.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GDPR compliant</h3>
              <p className="text-gray-600">
                We comply with international data protection regulations to keep your information safe and secure.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex gap-8 items-center">
              <div className="text-gray-400 font-semibold">Trusted by:</div>
              <div className="flex gap-6">
                <div className="px-4 py-2 bg-gray-100 rounded text-gray-600 font-semibold">SOC 2</div>
                <div className="px-4 py-2 bg-gray-100 rounded text-gray-600 font-semibold">ISO 27001</div>
                <div className="px-4 py-2 bg-gray-100 rounded text-gray-600 font-semibold">GDPR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-4">
            Why choose us?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            See how we compare to other platforms
          </p>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-900 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-blue-600 font-semibold">Us</th>
                  <th className="px-6 py-4 text-center text-gray-600 font-semibold">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900">Professional networking</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Advanced job matching</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-2xl">○</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Free forever plan</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-2xl">○</span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Profile analytics</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">24/7 customer support</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400 text-2xl">○</span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">No ads on free plan</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 text-2xl">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-red-600 text-2xl">✗</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-light text-gray-900 mb-6">
            Ready to take the next step?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join today and start building your professional future.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
          >
            Get started for free
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Free forever
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Linked</h3>
              <p className="text-gray-400 text-sm">
                Your professional community
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Help Center</li>
                <li>Blog</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Linked. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}





