import React from 'react';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { KnowledgeNode } from '../../types';

interface NodeDetailsProps {
  node: KnowledgeNode;
}

export default function NodeDetails({ node }: NodeDetailsProps) {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{node.label}</h3>
          <span className={`px-2 py-0.5 text-sm rounded-full ${
            node.type === 'biomarker' ? 'bg-blue-100 text-blue-700' :
            node.type === 'disease' ? 'bg-red-100 text-red-700' :
            'bg-green-100 text-green-700'
          }`}>
            {node.type}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{node.description}</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Confidence Score</h4>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 rounded-full h-2 transition-all duration-300"
            style={{ width: `${node.confidence * 100}%` }}
          />
        </div>
        <span className="text-sm text-gray-600 mt-1">
          {(node.confidence * 100).toFixed(0)}% confidence
        </span>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Sources</h4>
        <div className="space-y-2">
          {node.sources.map((source, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Source {index + 1}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-indigo-600 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="flex items-center gap-2 text-sm text-amber-600">
          <AlertCircle className="w-4 h-4" />
          <span>Last updated 2 days ago</span>
        </div>
      </div>
    </div>
  );
}