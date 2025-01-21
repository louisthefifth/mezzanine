import React, { useState } from 'react';
import { Search, Filter, Network, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';
import GraphVisualization from './GraphVisualization';
import NodeDetails from './NodeDetails';
import RelationshipPanel from './RelationshipPanel';
import { KnowledgeNode, KnowledgeRelation } from '../../types';

export default function KnowledgeGraph() {
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [filters, setFilters] = useState({
    nodeTypes: ['biomarker', 'disease', 'intervention'],
    minConfidence: 0.7,
  });

  const handleNodeSelect = (node: KnowledgeNode) => {
    setSelectedNode(node);
  };

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.max(0.5, Math.min(2, prev + delta)));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="border-b p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Network className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900">Knowledge Graph</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleZoom(-0.1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ZoomOut className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => handleZoom(0.1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ZoomIn className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Maximize2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search biomarkers, diseases, or interventions..."
              className="w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[600px]">
        <div className="lg:col-span-3 border-r">
          <GraphVisualization
            onNodeSelect={handleNodeSelect}
            zoomLevel={zoomLevel}
            searchQuery={searchQuery}
            filters={filters}
          />
        </div>
        <div className="p-4 space-y-6">
          {selectedNode ? (
            <>
              <NodeDetails node={selectedNode} />
              <RelationshipPanel nodeId={selectedNode.id} />
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a node to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}