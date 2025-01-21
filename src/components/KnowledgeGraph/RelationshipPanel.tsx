import React from 'react';
import { ArrowRight } from 'lucide-react';
import { KnowledgeRelation } from '../../types';

interface RelationshipPanelProps {
  nodeId: string;
}

export default function RelationshipPanel({ nodeId }: RelationshipPanelProps) {
  // Sample relationships data
  const relationships: KnowledgeRelation[] = [
    {
      id: '1',
      source: '1',
      target: '2',
      type: 'increases',
      strength: 0.85,
      evidence: ['Clinical study A', 'Meta-analysis B'],
      mechanismOfAction: 'HPA axis dysregulation',
    },
  ];

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-3">Relationships</h3>
      <div className="space-y-3">
        {relationships.map((relation) => (
          <div key={relation.id} className="border rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-gray-900">Cortisol</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-900">Chronic Fatigue</span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-gray-600">Relationship Strength</span>
                <span className="font-medium text-gray-900">
                  {(relation.strength * 100).toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-indigo-600 rounded-full h-1.5"
                  style={{ width: `${relation.strength * 100}%` }}
                />
              </div>
            </div>
            {relation.mechanismOfAction && (
              <div className="mt-2 text-sm text-gray-600">
                <span className="font-medium">Mechanism: </span>
                {relation.mechanismOfAction}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}