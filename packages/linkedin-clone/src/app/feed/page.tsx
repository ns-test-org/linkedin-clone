'use client';

import { useEffect, useState } from 'react';

export default function Feed() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-amber-900 flex items-center gap-2">
              💩 StinkedIn
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-amber-900">{profile.fullName}</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white font-semibold">
                {profile.fullName.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-8 text-center">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">
            Welcome, {profile.fullName}!
          </h2>
          <p className="text-amber-800 mb-2">{profile.headline}</p>
          <p className="text-amber-700 text-sm">{profile.location}</p>
          {profile.about && (
            <p className="text-amber-800 mt-4">{profile.about}</p>
          )}
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-md cursor-pointer">
            Add a Stinker to the Board
          </button>
        </div>
      </main>
    </div>
  );
}


