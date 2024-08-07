import { Circle } from 'lucide-react';
import React from 'react';

const Radio = ({ label, isChecked, onChange, name, value}) => {
  return (
    <label className="flex items-center gap-4 cursor-pointer">
      <input
        type="radio"
        checked={isChecked}
        onChange={onChange}
        name={name}
        value={value}
        className="hidden"
      />
      <span
        className={`w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center ${
          isChecked ? 'bg-[#87cefa]' : 'bg-white'
        }`}
      >
        {isChecked && (
        //   <span className="w-1 h-1 bg-white rounded-full"></span>
        <Circle color='white' fill='white' size={5} />
        )}
      </span>
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default Radio;
