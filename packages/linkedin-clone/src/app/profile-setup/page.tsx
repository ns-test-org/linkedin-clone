'use client';

import { useState } from 'react';

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    fullName: '',
    headline: '',
    location: '',
    about: '',
    profilePhoto: '',
  });

  const handleNext = () => {
    if (step === 1) {
      // Validate mandatory fields
      if (!profile.fullName || !profile.headline || !profile.location) {
        alert('Please fill in all required fields');
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSkip = () => {
    setStep(step + 1);
  };

  const handleFinish = () => {
    // Save profile to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile));
    window.location.href = '/feed';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-amber-900 flex items-center gap-2">
            💩 StinkedIn
          </h1>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-amber-900">Step {step} of 3</span>
            <span className="text-sm text-amber-700">{Math.round((step / 3) * 100)}% complete</span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-amber-600 to-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 border border-amber-200">
          {/* Step 1: Basic Info (Mandatory) */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-semibold text-amber-900 mb-2">
                Let&apos;s build your profile
              </h2>
              <p className="text-amber-700 mb-8">
                This information is required to get started
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    Professional Headline <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={profile.headline}
                    onChange={(e) => setProfile({ ...profile, headline: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 bg-white"
                    placeholder="Software Engineer at Tech Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 bg-white"
                    placeholder="San Francisco, CA"
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="mt-8 w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-md cursor-pointer"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: About (Optional) */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-semibold text-amber-900 mb-2">
                Tell us about yourself
              </h2>
              <p className="text-amber-700 mb-8">
                This is optional, but helps others understand your background
              </p>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">
                  About / Summary
                </label>
                <textarea
                  value={profile.about}
                  onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 bg-white"
                  placeholder="Share your story, experience, and what you're passionate about..."
                />
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleSkip}
                  className="flex-1 bg-white text-amber-900 py-3 rounded-full font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
                >
                  Skip for now
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-md cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Profile Photo (Optional) */}
          {step === 3 && (
            <div>
              <h2 className="text-3xl font-semibold text-amber-900 mb-2">
                Add a profile photo
              </h2>
              <p className="text-amber-700 mb-8">
                Profiles with photos get more engagement
              </p>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-amber-200 flex items-center justify-center mb-6">
                  {profile.profilePhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profile.profilePhoto}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-16 h-16 text-amber-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                <label className="block text-sm font-medium text-amber-900 mb-2">
                  Photo URL (optional)
                </label>
                <input
                  type="url"
                  value={profile.profilePhoto}
                  onChange={(e) => setProfile({ ...profile, profilePhoto: e.target.value })}
                  className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 bg-white"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleFinish}
                  className="flex-1 bg-white text-amber-900 py-3 rounded-full font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
                >
                  Skip for now
                </button>
                <button
                  onClick={handleFinish}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-md cursor-pointer"
                >
                  Finish
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}







