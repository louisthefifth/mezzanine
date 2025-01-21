import React, { useState } from 'react';
import { Bell, Filter, Bookmark, Eye, EyeOff, BarChart2 } from 'lucide-react';
import UpdatesList from './UpdatesList';
import UpdateFilters from './UpdateFilters';
import RelevanceMetrics from './RelevanceMetrics';
import { HealthUpdate, UpdateFilter } from '../../types';

export default function HealthMonitor() {
  const [activeFilters, setActiveFilters] = useState<UpdateFilter>({
    categories: ['research', 'clinical'],
    minRelevance: 0.7,
    minCredibility: 0.8,
    tags: [],
  });

  const [showFilters, setShowFilters] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="border-b p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bell className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900">Health Updates</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMetrics(!showMetrics)}
              className="p-2 hover:bg-gray-100 rounded-full"
              title="View Metrics"
            >
              <BarChart2 className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-full ${
                showFilters ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-100 text-gray-600'
              }`}
              title="Show Filters"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {showFilters && (
          <UpdateFilters
            filters={activeFilters}
            onChange={setActiveFilters}
          />
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
        <div className="lg:col-span-2 border-r">
          <UpdatesList filters={activeFilters} />
        </div>
        {showMetrics && (
          <div className="p-4">
            <RelevanceMetrics />
          </div>
        )}
      </div>
    </div>
  );
}