import React from 'react';
import { LineChart, Activity, Brain, Heart } from 'lucide-react';
import MetricsCard from './MetricsCard';
import ProtocolsList from './ProtocolsList';
import InsightsPanel from './InsightsPanel';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
          <p className="text-gray-600 mt-1">Your personalized health optimization center</p>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          New Assessment
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Biomarkers"
          value="12"
          change="+2"
          icon={<Activity className="w-6 h-6" />}
          color="text-emerald-600"
        />
        <MetricsCard
          title="Active Protocols"
          value="3"
          change="0"
          icon={<LineChart className="w-6 h-6" />}
          color="text-blue-600"
        />
        <MetricsCard
          title="Cognitive Score"
          value="85"
          change="+5"
          icon={<Brain className="w-6 h-6" />}
          color="text-purple-600"
        />
        <MetricsCard
          title="Heart Health"
          value="92"
          change="+1"
          icon={<Heart className="w-6 h-6" />}
          color="text-red-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProtocolsList />
        </div>
        <div>
          <InsightsPanel />
        </div>
      </div>
    </div>
  );
}