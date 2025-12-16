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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">Linked</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">{profile.fullName}</span>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {profile.fullName.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome, {profile.fullName}!
          </h2>
          <p className="text-gray-600 mb-2">{profile.headline}</p>
          <p className="text-gray-500 text-sm">{profile.location}</p>
          {profile.about && (
            <p className="text-gray-700 mt-4">{profile.about}</p>
          )}
        </div>
      </main>
    </div>
  );
}

