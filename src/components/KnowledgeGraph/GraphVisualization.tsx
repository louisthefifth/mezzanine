import React from 'react';
import { KnowledgeNode } from '../../types';

interface GraphVisualizationProps {
  onNodeSelect: (node: KnowledgeNode) => void;
  zoomLevel: number;
  searchQuery: string;
  filters: {
    nodeTypes: string[];
    minConfidence: number;
  };
}

export default function GraphVisualization({
  onNodeSelect,
  zoomLevel,
  searchQuery,
  filters,
}: GraphVisualizationProps) {
  // Sample data for visualization
  const sampleNodes: KnowledgeNode[] = [
    {
      id: '1',
      type: 'biomarker',
      label: 'Cortisol',
      description: 'Primary stress hormone',
      confidence: 0.95,
      sources: ['source1', 'source2'],
    },
    {
      id: '2',
      type: 'disease',
      label: 'Chronic Fatigue',
      description: 'Persistent fatigue condition',
      confidence: 0.88,
      sources: ['source3'],
    },
  ];

  return (
    <div className="relative w-full h-full bg-gray-50 p-4">
      <div
        className="absolute inset-0 transition-transform duration-200"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        {/* Placeholder for graph visualization */}
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-500">
            Graph visualization will be rendered here
          </div>
        </div>
      </div>
    </div>
  );
}