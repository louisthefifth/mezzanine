import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

export default function ProtocolsList() {
  const protocols = [
    {
      title: 'Cognitive Enhancement Protocol',
      description: 'Optimize mental clarity and focus through targeted interventions',
      progress: 75,
    },
    {
      title: 'Sleep Optimization',
      description: 'Improve sleep quality and recovery metrics',
      progress: 60,
    },
    {
      title: 'Stress Management',
      description: 'Reduce cortisol and enhance stress resilience',
      progress: 40,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Active Protocols</h2>
        <button className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-4">
        {protocols.map((protocol, index) => (
          <div key={index} className="border rounded-lg p-4 hover:border-indigo-200 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{protocol.title}</h3>
                <p className="text-sm text-gray-600">{protocol.description}</p>
              </div>
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900 font-medium">{protocol.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 rounded-full h-2 transition-all duration-300"
                  style={{ width: `${protocol.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}