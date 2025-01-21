import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { ResearchSource } from '../../types';

export default function SourceCredibility() {
  const sources: ResearchSource[] = [
    {
      id: 'source1',
      title: 'Journal of Neuroscience',
      url: 'https://example.com/source1',
      type: 'study',
      credibilityScore: 9.2,
      datePublished: new Date('2024-01-15'),
      keyFindings: [
        'Significant cognitive improvements',
        'No adverse effects reported',
      ],
      relevanceScore: 0.95,
    },
    {
      id: 'source2',
      title: 'Frontiers in Psychology',
      url: 'https://example.com/source2',
      type: 'meta-analysis',
      credibilityScore: 8.7,
      datePublished: new Date('2024-01-10'),
      keyFindings: [
        'Stress reduction confirmed',
        'Biomarker improvements',
      ],
      relevanceScore: 0.88,
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Source Credibility</h3>
      {sources.map((source) => (
        <div key={source.id} className="border rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium text-gray-900">{source.title}</h4>
              <span className="text-sm text-gray-500 capitalize">{source.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-gray-900">
                {source.credibilityScore.toFixed(1)}
              </span>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            {source.keyFindings.map((finding, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>{finding}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-sm text-gray-500">
            Published: {source.datePublished.toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}