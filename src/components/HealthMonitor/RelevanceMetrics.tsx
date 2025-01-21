import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

export default function RelevanceMetrics() {
  const metrics = [
    {
      label: 'Update Relevance',
      value: '92%',
      change: '+5%',
      trend: 'up',
    },
    {
      label: 'Source Quality',
      value: '88%',
      change: '+2%',
      trend: 'up',
    },
    {
      label: 'Update Frequency',
      value: '8/day',
      change: '-1',
      trend: 'down',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-sm font-medium text-gray-700">Relevance Metrics</h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="border rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">{metric.label}</span>
              {metric.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {metric.value}
              </span>
              <span className={`text-sm ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Update Stream Health</span>
          <div className="flex items-center gap-1">
            <Activity className="w-4 h-4 text-green-500" />
            <span className="text-green-600">Healthy</span>
          </div>
        </div>
      </div>
    </div>
  );
}