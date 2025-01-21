import React from 'react';

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

export default function MetricsCard({ title, value, change, icon, color }: MetricsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className={`${color}`}>{icon}</span>
        <span className={`text-sm font-medium ${
          parseInt(change) >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {change.startsWith('+') ? change : change.startsWith('-') ? change : `+${change}`}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mt-4">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  );
}