import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';

function App() {
  return (
    // Main container with the dark background
    <div className="min-h-screen bg-[#2D2D2D] p-10 text-white font-sans">
      
      {/* This is the alignment fix:
        - It's a 2-column grid on large screens (lg:grid-cols-2)
        - It's a 1-column grid on mobile (grid-cols-1)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Instruction #4: The left column is empty (and hides on mobile) */}
        <div className="hidden lg:block"></div>

        {/* The right column with your two widgets */}
        <div className="flex flex-col gap-8">
          <AboutMe />
          <Gallery />
        </div>

      </div>
    </div>
  );
}

export default App;