import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, FileText, BookOpen, Bell, Settings } from 'lucide-react';
import Button from '../common/Button';
import { mockUser } from '../../data/mockData';

const UserProfile: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/profile', icon: User, label: 'Overview' },
    { path: '/profile/documents', icon: FileText, label: 'My Documents' },
    { path: '/profile/saved', icon: BookOpen, label: 'Saved' },
    { path: '/profile/notifications', icon: Bell, label: 'Notifications' },
    { path: '/profile/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-medium text-gray-600">
                {mockUser.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-gray-900">{mockUser.name}</h1>
              <p className="text-gray-500">{mockUser.university}</p>
              <div className="flex items-center mt-2 space-x-4">
                <span className="text-sm text-gray-500">
                  {mockUser.documentsUploaded} documents uploaded
                </span>
                <span className="text-sm text-gray-500">
                  {mockUser.documentsDownloaded} downloads
                </span>
              </div>
            </div>
            <div className="ml-auto">
              <Button>Edit Profile</Button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Navigation */}
          <aside className="w-64">
            <nav className="bg-white rounded-lg shadow-sm">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-3 text-sm ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <Routes>
              <Route path="/" element={<ProfileOverview />} />
              <Route path="/documents" element={<MyDocuments />} />
              <Route path="/saved" element={<SavedDocuments />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

const ProfileOverview: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            'Uploaded "Advanced Calculus Notes"',
            'Downloaded "Chemistry Lab Report"',
            'Saved "Economics Study Guide"',
            'Earned Silver Badge'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-gray-700">{activity}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Uploads</span>
            <span className="font-medium">{mockUser.documentsUploaded}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Downloads</span>
            <span className="font-medium">{mockUser.documentsDownloaded}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Contribution Score</span>
            <span className="font-medium">856</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Member Since</span>
            <span className="font-medium">Jan 2024</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MyDocuments: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-6">My Documents</h2>
    <p className="text-gray-500">Your uploaded documents will appear here.</p>
  </div>
);

const SavedDocuments: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-6">Saved Documents</h2>
    <p className="text-gray-500">Your saved documents will appear here.</p>
  </div>
);

const Notifications: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-6">Notifications</h2>
    <p className="text-gray-500">Your notifications will appear here.</p>
  </div>
);

const Settings: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
    <p className="text-gray-500">Manage your account settings and preferences.</p>
  </div>
);

export default UserProfile;