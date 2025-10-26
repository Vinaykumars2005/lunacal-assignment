// We will create these component files in the next steps
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';

function App() {
  return (
    // Main container with the dark background from Figma
    <div className="min-h-screen bg-[#2D2D2D] p-10 text-white font-sans">

      {/* Responsive 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Instruction #4: Left, empty column (hidden on mobile) */}
        <div className="hidden lg:block"></div>

        {/* Right column for our widgets */}
        <div className="flex flex-col gap-8">

          {/* Instruction #5: Add the two widgets */}
          <AboutMe />
          <Gallery />

        </div>
      </div>
    </div>
  );
}

export default App;