
import React, { useState, useEffect } from 'react';

/**
 * A simplified representation of a shadcn/ui Progress component for visual purposes.
 * In a real project, this would be imported from the actual library.
 */
const ProgressPrimitive: React.FC<{ value: number, className?: string }> = ({ value, className = '' }) => (
    <div className={`relative h-3 w-full overflow-hidden rounded-full bg-gray-700/80 ${className}`}>
        <div 
            className="h-full w-full flex-1 bg-gradient-to-r from-teal-400 to-sky-500 transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            role="presentation"
        />
    </div>
);

export interface ProgressBarProps {
  /** The value of the progress bar, from 0 to 100. */
  value: number;
  /** Optional additional class names for styling. */
  className?: string;
}

/**
 * An animated progress bar that visually represents a numerical value.
 * The progress animates on mount to provide a dynamic visual effect.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ value, className }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the progress bar on mount or when the value changes
    const timer = setTimeout(() => setProgress(value > 100 ? 100 : value < 0 ? 0 : value), 150);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <ProgressPrimitive
      value={progress}
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className={className}
    />
  );
};

export default ProgressBar;
