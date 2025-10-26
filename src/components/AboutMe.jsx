import { useState } from 'react';
// This is the updated icon import
import { HiOutlineDotsVertical } from 'react-icons/hi';

// This is the base style for both widgets
const widgetBaseStyle = "bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6";

export default function AboutMe() {
  // This 'state' remembers which tab is active
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className={widgetBaseStyle}>
      {/* Header with tabs */}
      <div className="flex justify-between items-center mb-4">
        
        {/* Updated icon (replaces the '?') */}
        <HiOutlineDotsVertical className="text-xl text-gray-400" />
        
        <div className="flex space-x-2 bg-black/30 p-1 rounded-full">
          <TabButton
            title="About Me"
            isActive={activeTab === 'about'}
            onClick={() => setActiveTab('about')}
          />
          <TabButton
            title="Experiences"
            isActive={activeTab === 'experiences'}
            onClick={() => setActiveTab('experiences')}
          />
          <TabButton
            title="Recommended"
            isActive={activeTab === 'recommended'}
            onClick={() => setActiveTab('recommended')}
          />
        </div>
      </div>

      {/* Tab Content - This changes based on 'activeTab' state */}
      <div className="flex-grow overflow-y-auto pr-2">
        {activeTab === 'about' && (
          // Full text from the design
          <p className="text-gray-300 text-sm leading-relaxed">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br /><br />
            I was born and raised in Albany, NY & have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters - Emma and Ella. Both of them are just starting school,
            so my calender is usually blocked between 9–10 AM. This is a...
          </p>
        )}
        {activeTab === 'experiences' && (
          <p className="text-gray-300 text-sm">Experiences content goes here.</p>
        )}
        {activeTab === 'recommended' && (
          <p className="text-gray-300 text-sm">Recommended content goes here.</p>
        )}
      </div>
    </div>
  );
}

// A helper component for the buttons
function TabButton({ title, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2.5 rounded-full text-sm font-medium
        transition-colors duration-200
        ${isActive ? 'bg-white/90 text-black' : 'text-gray-300 hover:bg-white/10'}
      `}
    >
      {title}
    </button>
  );
}