'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface UserProfile {
  fullName: string;
  headline: string;
  location: string;
  about: string;
  profilePhoto: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

interface Post {
  id: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<'posts' | 'projects'>('posts');

  useEffect(() => {
    // Load profile from localStorage
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    // Load projects from localStorage (or use sample data)
    const savedProjects = localStorage.getItem('userProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Sample projects
      setProjects([
        {
          id: '1',
          title: 'E-Commerce Platform',
          description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
          date: 'Jan 2024',
          tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
        },
        {
          id: '2',
          title: 'AI Chatbot Assistant',
          description: 'Developed an AI-powered chatbot using OpenAI API for customer support automation. Reduced response time by 70%.',
          date: 'Nov 2023',
          tags: ['Python', 'OpenAI', 'Flask', 'NLP']
        },
        {
          id: '3',
          title: 'Mobile Fitness App',
          description: 'Created a cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
          date: 'Aug 2023',
          tags: ['React Native', 'Firebase', 'Redux']
        }
      ]);
    }

    // Load posts from localStorage (or use sample data)
    const savedPosts = localStorage.getItem('userPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Sample posts
      setPosts([
        {
          id: '1',
          content: 'Excited to share that I just completed a major project! Building scalable systems has been an incredible learning experience. Looking forward to what\'s next! 🚀',
          date: '2 days ago',
          likes: 42,
          comments: 8
        },
        {
          id: '2',
          content: 'Just attended an amazing tech conference. The future of AI and machine learning is incredibly promising. Met some brilliant minds and learned so much!',
          date: '1 week ago',
          likes: 67,
          comments: 12
        },
        {
          id: '3',
          content: 'Sharing some thoughts on clean code practices. Writing maintainable code is just as important as making it work. What are your favorite coding principles?',
          date: '2 weeks ago',
          likes: 89,
          comments: 23
        }
      ]);
    }
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No profile found</p>
          <Link href="/profile-setup" className="text-blue-600 hover:underline">
            Set up your profile
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link href="/feed">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">Linked</h1>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/feed" className="text-sm text-gray-700 hover:text-blue-600">
                Feed
              </Link>
              <Link href="/profile" className="text-sm text-blue-600 font-semibold">
                Profile
              </Link>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {profile.fullName.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header Card */}
        <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-700"></div>
          
          {/* Profile Info */}
          <div className="px-8 pb-8">
            <div className="flex items-end -mt-16 mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                {profile.profilePhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.profilePhoto}
                    alt={profile.fullName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-16 h-16 text-gray-400"
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
            </div>

            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {profile.fullName}
              </h1>
              <p className="text-xl text-gray-700 mb-2">{profile.headline}</p>
              <p className="text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {profile.location}
              </p>
            </div>

            {profile.about && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
                <p className="text-gray-700 leading-relaxed">{profile.about}</p>
              </div>
            )}

            {/* Stats */}
            <div className="flex gap-6 pt-4 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
                <p className="text-sm text-gray-600">Posts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {posts.reduce((sum, post) => sum + post.likes, 0)}
                </p>
                <p className="text-sm text-gray-600">Total Likes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('posts')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                  activeTab === 'posts'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Posts ({posts.length})
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                  activeTab === 'projects'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Projects ({projects.length})
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'posts' && (
              <div className="space-y-6">
                {posts.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No posts yet</p>
                ) : (
                  posts.map((post) => (
                    <div key={post.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                          {profile.fullName.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{profile.fullName}</p>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          {post.likes} Likes
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {post.comments} Comments
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                {projects.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No projects yet</p>
                ) : (
                  projects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <span className="text-sm text-gray-500">{project.date}</span>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

