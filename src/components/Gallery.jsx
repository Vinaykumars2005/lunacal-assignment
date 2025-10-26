// File: src/components/Gallery.jsx (Final CSS Placeholder Version)

import { useState } from 'react';
// 1. Import the icons we need
import { HiOutlineViewGrid, HiPlus, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

// Use the same base style
const widgetBaseStyle = "bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6";

// 2. The initial "images" are now just a list of numbers
const initialItems = [1, 2, 3];

export default function Gallery() {
  // 3. The state now holds a list of numbers, e.g., [1, 2, 3, 4]
  const [items, setItems] = useState(initialItems);

  const addImage = () => {
    // 4. Add a new number to the list (e.g., 4, then 5, etc.)
    setItems([...items, items.length + 1]);
  };

  return (
    <div className={widgetBaseStyle}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <HiOutlineViewGrid className="text-xl text-gray-400" />
          <h2 className="font-medium">Gallery</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={addImage}
            className="flex items-center gap-1.5 bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
          >
            <HiPlus />
            ADD IMAGE
          </button>
          <IconButton icon={<HiOutlineChevronLeft />} />
          <IconButton icon={<HiOutlineChevronRight />} />
        </div>
      </div>

      {/* --- THIS IS THE CSS IMAGE BOX --- */}
      <div className="grid grid-cols-3 gap-3">
        {/* 5. We map over the list of numbers */}
        {items.map((itemNumber) => (
          // 6. This is a <div>, not an <img> tag. It's a gray box.
          <div
            key={itemNumber}
            className="aspect-square w-full h-full rounded-lg bg-white/10 flex items-center justify-center text-xs text-gray-400"
          >
            Gallery item {itemNumber}
          </div>
        ))}
      </div>
      {/* --- END OF CSS IMAGE BOX --- */}

    </div>
  );
}

// IconButton component with correct 45px size
function IconButton({ icon }) {
  return (
    <button className="bg-white/10 p-2 rounded-full text-gray-300 hover:bg-white/20 w-[45px] h-[45px] flex items-center justify-center transition-colors">
      {icon}
    </button>
  );
}