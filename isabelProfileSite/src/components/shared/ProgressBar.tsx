// src/components/shared/ProgressBar.tsx

import React from 'react';

interface ProgressBarProps {
  skill: string;
  percentage: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, percentage, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2.5">
        <div
          className={`bg-${color}-500 h-2.5 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
