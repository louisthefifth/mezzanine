import React from 'react';
import { Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';

export default function InsightsPanel() {
  const insights = [
    {
      type: 'improvement',
      message: 'Cognitive performance up 15% this week',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-green-600',
    },
    {
      type: 'suggestion',
      message: 'Consider adding Lion\'s Mane to your stack',
      icon: <Lightbulb className="w-5 h-5" />,
      color: 'text-amber-600',
    },
    {
      type: 'alert',
      message: 'Cortisol levels elevated above baseline',
      icon: <AlertCircle className="w-5 h-5" />,
      color: 'text-red-600',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Latest Insights</h2>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className={insight.color}>{insight.icon}</span>
            <p className="text-sm text-gray-700">{insight.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}