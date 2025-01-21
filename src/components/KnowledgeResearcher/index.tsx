import React, { useState } from 'react';
import { Search, Filter, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import ResearchResults from './ResearchResults';
import SourceCredibility from './SourceCredibility';
import { ResearchQuery, ResearchSource } from '../../types';

export default function KnowledgeResearcher() {
  const [query, setQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeFilters, setActiveFilters] = useState<ResearchQuery['filters']>({
    sourceTypes: ['study', 'meta-analysis'],
    minCredibilityScore: 7,
  });

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate research process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSearching(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Knowledge Researcher</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Auto-update</span>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <RefreshCw className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Research a health topic or intervention..."
            className="w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
        >
          {isSearching ? 'Researching...' : 'Research'}
        </button>
      </div>

      <div className="flex items-center gap-4 py-2">
        <Filter className="w-5 h-5 text-gray-500" />
        <div className="flex gap-2">
          {Object.entries(activeFilters.sourceTypes || {}).map(([type]) => (
            <button
              key={type}
              className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ResearchResults />
        </div>
        <div>
          <SourceCredibility />
        </div>
      </div>

      <div className="border-t pt-4 mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">12 verified claims</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-gray-600">3 disputed claims</span>
          </div>
        </div>
      </div>
    </div>
  );
}