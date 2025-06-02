import React from 'react';
import { BarChart2, TrendingUp, Users, FileText } from 'lucide-react';

const AdminAnalytics: React.FC = () => {
  const stats = [
    { label: 'Total Users', value: '25,421', icon: Users, change: '+12%', positive: true },
    { label: 'Documents', value: '84,382', icon: FileText, change: '+8%', positive: true },
    { label: 'Downloads', value: '245,985', icon: TrendingUp, change: '+15%', positive: true },
    { label: 'Revenue', value: '$52,147', icon: BarChart2, change: '-3%', positive: false },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Chart placeholder */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Downloads Over Time</h2>
        <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
          <p className="text-gray-500">Chart visualization would go here</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Categories</h2>
          <div className="space-y-4">
            {['Business', 'Engineering', 'Medicine', 'Computer Science', 'Law'].map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{category}</span>
                <div className="flex items-center">
                  <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${Math.random() * 60 + 40}%` }}
                    ></div>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">
                    {Math.floor(Math.random() * 5000 + 5000)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              'New document uploaded: "Advanced Calculus Notes"',
              'User report: inappropriate content',
              'New premium subscription',
              'Document verification request',
              'New university partnership request'
            ].map((activity, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;