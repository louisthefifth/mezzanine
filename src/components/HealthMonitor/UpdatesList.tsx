import React from 'react';
import { ExternalLink, Bookmark, Eye, EyeOff } from 'lucide-react';
import { HealthUpdate, UpdateFilter } from '../../types';

interface UpdatesListProps {
  filters: UpdateFilter;
}

export default function UpdatesList({ filters }: UpdatesListProps) {
  // Sample updates data
  const updates: HealthUpdate[] = [
    {
      id: '1',
      title: 'New Research on NAD+ Supplementation',
      summary: 'Recent study shows promising results for NAD+ supplementation in cognitive enhancement',
      source: {
        name: 'Nature Medicine',
        url: 'https://example.com',
        credibilityScore: 0.95,
      },
      category: 'research',
      relevanceScore: 0.88,
      datePublished: new Date('2024-03-10'),
      tags: ['NAD+', 'cognition', 'supplementation'],
      status: 'new',
      relatedBiomarkers: ['NAD+', 'NADH ratio'],
      relatedConditions: ['cognitive decline'],
    },
    {
      id: '2',
      title: 'Clinical Trial Results: Peptide Therapy',
      summary: 'Phase III trial demonstrates efficacy of novel peptide therapy for inflammation',
      source: {
        name: 'Clinical Trials Journal',
        url: 'https://example.com',
        credibilityScore: 0.92,
      },
      category: 'clinical',
      relevanceScore: 0.85,
      datePublished: new Date('2024-03-09'),
      tags: ['peptides', 'inflammation', 'clinical trial'],
      status: 'new',
      relatedBiomarkers: ['IL-6', 'TNF-alpha'],
      relatedConditions: ['chronic inflammation'],
    },
  ];

  return (
    <div className="divide-y">
      {updates.map((update) => (
        <div key={update.id} className="p-4 hover:bg-gray-50 transition-colors">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  update.category === 'research' ? 'bg-blue-100 text-blue-700' :
                  update.category === 'clinical' ? 'bg-green-100 text-green-700' :
                  update.category === 'regulatory' ? 'bg-amber-100 text-amber-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {update.category}
                </span>
                <span className="text-sm text-gray-500">
                  {update.datePublished.toLocaleDateString()}
                </span>
              </div>
              <h3 className="font-medium text-gray-900">{update.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{update.summary}</p>
            </div>
            <div className="flex items-start gap-2">
              <button className="p-1.5 hover:bg-gray-100 rounded-full">
                <Bookmark className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded-full">
                {update.status === 'read' ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{update.source.name}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-indigo-600 cursor-pointer" />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {update.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}