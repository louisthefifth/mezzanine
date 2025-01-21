import React from 'react';
import { ExternalLink, ThumbsUp, ThumbsDown } from 'lucide-react';
import { ExtractedClaim } from '../../types';

export default function ResearchResults() {
  const claims: ExtractedClaim[] = [
    {
      id: '1',
      sourceId: 'source1',
      claim: 'Regular consumption of Lion\'s Mane mushroom shows significant improvement in cognitive function',
      confidence: 0.85,
      supportingEvidence: [
        'Double-blind placebo controlled study with 96 participants',
        'Consistent results across multiple trials',
      ],
      contradictingEvidence: [
        'Some variance in dosage effectiveness',
      ],
      dateExtracted: new Date('2024-02-15'),
      status: 'verified',
    },
    {
      id: '2',
      sourceId: 'source2',
      claim: 'Combination of meditation and breathwork reduces cortisol levels by 23% on average',
      confidence: 0.92,
      supportingEvidence: [
        'Meta-analysis of 15 studies',
        'Consistent biomarker measurements',
      ],
      contradictingEvidence: [],
      dateExtracted: new Date('2024-02-10'),
      status: 'verified',
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Findings</h3>
      {claims.map((claim) => (
        <div key={claim.id} className="border rounded-lg p-4 hover:border-indigo-200 transition-colors">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="font-medium text-gray-900">{claim.claim}</p>
              <div className="mt-2 space-y-1">
                {claim.supportingEvidence.map((evidence, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <ThumbsUp className="w-4 h-4 text-green-500" />
                    <span>{evidence}</span>
                  </div>
                ))}
                {claim.contradictingEvidence.map((evidence, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <ThumbsDown className="w-4 h-4 text-red-500" />
                    <span>{evidence}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">
                {(claim.confidence * 100).toFixed(0)}% confidence
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-indigo-600 cursor-pointer" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
            <span>Extracted: {claim.dateExtracted.toLocaleDateString()}</span>
            <span className={`px-2 py-0.5 rounded-full ${
              claim.status === 'verified' ? 'bg-green-100 text-green-700' : 
              claim.status === 'disputed' ? 'bg-red-100 text-red-700' : 
              'bg-yellow-100 text-yellow-700'
            }`}>
              {claim.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}