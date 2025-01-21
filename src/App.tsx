import React from 'react';
import { Beaker } from 'lucide-react';
import Dashboard from './components/Dashboard';
import KnowledgeResearcher from './components/KnowledgeResearcher';
import KnowledgeGraph from './components/KnowledgeGraph';
import HealthMonitor from './components/HealthMonitor';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Beaker className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Mezzanine</span>
            </div>
            <div className="flex items-center">
              <button className="ml-4 px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                Profile
              </button>
              <button className="ml-4 px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto space-y-6 p-6">
        <Dashboard />
        <KnowledgeResearcher />
        <KnowledgeGraph />
        <HealthMonitor />
      </main>
    </div>
  );
}

export default App;