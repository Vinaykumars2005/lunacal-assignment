import { useState } from 'react';
// 1. Import the icons we need
import { HiOutlineViewGrid, HiPlus, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

// Use the same base style
const widgetBaseStyle = "bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6";

// 2. Use better image URLs that will load real photos
const initialImages = [
  'https://source.unsplash.com/random/400x400?architecture&sig=1',
  'https://source.unsplash.com/random/400x400?architecture&sig=2',
  'https://source.unsplash.com/random/400x400?architecture&sig=3',
];

export default function Gallery() {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    // 3. Add a new *random* image from Unsplash
    const newImage = `https://source.unsplash.com/random/400x400?architecture&sig=${Math.random()}`;
    setImages([...images, newImage]);
  };

  return (
    <div className={widgetBaseStyle}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* 4. Add the grid icon next to the title */}
        <div className="flex items-center gap-3">
          <HiOutlineViewGrid className="text-xl text-gray-400" />
          <h2 className="font-medium">Gallery</h2>
        </div>
        
        <div className="flex items-center gap-2">
          
          {/* --- "ADD IMAGE" BUTTON UPDATED --- */}
          <button
            onClick={addImage}
            className="flex items-center gap-1.5 bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
          >
            {/* 5. Add the Plus icon */}
            <HiPlus />
            ADD IMAGE
          </button>
          {/* (Note: Double-check 'px-3 py-1.5' in Figma just like you did for the tabs!) */}
          
          
          {/* 6. Use the real icon components */}
          <IconButton icon={<HiOutlineChevronLeft />} />
          <IconButton icon={<HiOutlineChevronRight />} />
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery item ${index + 1}`}
            className="aspect-square w-full h-full object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

// --- ICON BUTTON COMPONENT UPDATED ---
// 7. Update the IconButton to accept an icon 'prop' and match Figma size
function IconButton({ icon }) {
  return (
    <button className="bg-white/10 p-2 rounded-full text-gray-300 hover:bg-white/20 w-[45px] h-[45px] flex items-center justify-center transition-colors">
      {icon}
    </button>
  );
}