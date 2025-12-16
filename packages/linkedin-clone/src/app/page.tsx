'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Store user in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to profile setup
      window.location.href = '/profile-setup';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-amber-900 flex items-center gap-2">
            💩 StinkedIn
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-amber-700">Already a member?</span>
            <Link
              href="/login"
              className="px-6 py-2 border-2 border-amber-600 text-amber-900 rounded-full font-semibold hover:bg-amber-50 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero */}
          <div>
            <h2 className="text-5xl font-light text-amber-900 mb-6">
              Call out the professionals who stiffed you 💩
            </h2>
            <p className="text-xl text-amber-800">
              Unpaid invoices? Ghosted after the interview? Broken promises? Share your story and expose the stinkers in your industry.
            </p>
          </div>

          {/* Right side - Signup Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-amber-200">
            <h3 className="text-2xl font-semibold text-amber-900 mb-6">
              Join and add your first stinker
            </h3>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 bg-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-amber-900 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 bg-white"
                  placeholder="6+ characters"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
              >
                Join & Add to Shame Board
              </button>
            </form>
            <p className="text-xs text-amber-700 mt-4 text-center">
              By joining, you agree to call out bad actors and keep it truthful. StinkedIn is for accountability, not defamation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}






