
import React from 'react';
import { ProgressBar } from '../ui/progress-bar';

export interface ScoreCardProps {
  /** The numerical score to display, from 0 to 100. */
  score: number;
  /** The title of the score card. */
  title: string;
  /** A brief description or summary related to the score. */
  description: string;
}

/**
 * A card component that displays a title, a score with an animated progress bar, and a description.
 * Used for high-level dashboard metrics.
 */
export const ScoreCard: React.FC<ScoreCardProps> = ({ score, title, description }) => {
  const getScoreColor = (value: number) => {
    if (value < 40) return 'text-rose-400';
    if (value < 70) return 'text-amber-400';
    return 'text-teal-400';
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      <div className="flex items-center space-x-4 mt-3">
        <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
          {score}
          <span className="text-2xl text-gray-400">/100</span>
        </div>
        <ProgressBar value={score} className="w-full" />
      </div>
      <p className="text-sm text-gray-400 mt-4">{description}</p>
    </div>
  );
};

export default ScoreCard;
