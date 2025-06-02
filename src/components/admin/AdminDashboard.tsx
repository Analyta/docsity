import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users, FileText, BookOpen, Settings, BarChart } from 'lucide-react';
import AdminUsers from './AdminUsers';
import AdminDocuments from './AdminDocuments';
import AdminCategories from './AdminCategories';
import AdminSettings from './AdminSettings';
import AdminAnalytics from './AdminAnalytics';

const AdminDashboard: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin', icon: BarChart, label: 'Analytics', component: AdminAnalytics },
    { path: '/admin/users', icon: Users, label: 'Users', component: AdminUsers },
    { path: '/admin/documents', icon: FileText, label: 'Documents', component: AdminDocuments },
    { path: '/admin/categories', icon: BookOpen, label: 'Categories', component: AdminCategories },
    { path: '/admin/settings', icon: Settings, label: 'Settings', component: AdminSettings },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
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
      <main className="flex-1 p-8">
        <Routes>
          {navItems.map((item) => (
            <Route
              key={item.path}
              path={item.path.replace('/admin', '')}
              element={<item.component />}
            />
          ))}
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;