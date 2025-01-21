import React from 'react';
import { UpdateFilter } from '../../types';

interface UpdateFiltersProps {
  filters: UpdateFilter;
  onChange: (filters: UpdateFilter) => void;
}

export default function UpdateFilters({ filters, onChange }: UpdateFiltersProps) {
  const handleCategoryToggle = (category: UpdateFilter['categories'][number]) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onChange({ ...filters, categories: newCategories });
  };

  return (
    <div className="space-y-4 pt-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {(['research', 'clinical', 'regulatory', 'product'] as const).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.categories.includes(category)
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Minimum Relevance
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={filters.minRelevance * 100}
            onChange={(e) => onChange({
              ...filters,
              minRelevance: parseInt(e.target.value) / 100,
            })}
            className="w-full mt-2"
          />
          <div className="text-sm text-gray-600 mt-1">
            {(filters.minRelevance * 100).toFixed(0)}%
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Minimum Credibility
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={filters.minCredibility * 100}
            onChange={(e) => onChange({
              ...filters,
              minCredibility: parseInt(e.target.value) / 100,
            })}
            className="w-full mt-2"
          />
          <div className="text-sm text-gray-600 mt-1">
            {(filters.minCredibility * 100).toFixed(0)}%
          </div>
        </div>
      </div>
    </div>
  );
}