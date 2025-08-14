
import React from 'react';

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);


export interface Source {
  id: string;
  url: string;
  title: string;
  credibility_score: number;
  type: string;
}

export interface SourceVerificationProps {
  sources: Source[];
}

/**
 * A component that lists verified sources from the content analysis,
 * including their title, URL, and credibility score.
 */
export const SourceVerification: React.FC<SourceVerificationProps> = ({ sources }) => {
   if (!sources || sources.length === 0) {
    return (
      <div className="text-center py-10 px-4 border-2 border-dashed border-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-200">No Sources Found</h3>
        <p className="mt-1 text-sm text-gray-400">The analysis did not identify any external sources or citations.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sources.map((source) => (
        <div key={source.id} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-teal-400 font-bold text-xl">{source.credibility_score}</span>
            </div>
            <div className="flex-grow">
                <p className="font-semibold text-gray-100">{source.title}</p>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-sky-400 hover:text-sky-300 flex items-center space-x-1 truncate transition-colors">
                    <LinkIcon className="w-4 h-4" />
                    <span>{source.url}</span>
                </a>
            </div>
            <div className="flex-shrink-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                    {source.type}
                </span>
            </div>
        </div>
      ))}
    </div>
  );
};

export default SourceVerification;
