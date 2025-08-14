
import React from 'react';

const ExclamationTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
    </svg>
);


export interface BiasResult {
  id: string;
  type: string;
  severity: 'Low' | 'Medium' | 'High';
  explanation: string;
}

export interface BiasAnalysisProps {
  biasResults: BiasResult[];
}

/**
 * Displays the results of a bias analysis, listing each detected bias with its type, severity, and an explanation.
 */
export const BiasAnalysis: React.FC<BiasAnalysisProps> = ({ biasResults }) => {
  if (!biasResults || biasResults.length === 0) {
    return (
      <div className="text-center py-10 px-4 border-2 border-dashed border-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-200">No Bias Detected</h3>
        <p className="mt-1 text-sm text-gray-400">The content appears to be neutral based on our analysis.</p>
      </div>
    );
  }

  const getSeverityClasses = (severity: BiasResult['severity']) => {
    switch (severity) {
      case 'High': return 'text-rose-400 border-rose-400/50 bg-rose-500/10';
      case 'Medium': return 'text-amber-400 border-amber-400/50 bg-amber-500/10';
      case 'Low': return 'text-sky-400 border-sky-400/50 bg-sky-500/10';
      default: return 'text-gray-400 border-gray-600 bg-gray-700/50';
    }
  };

  return (
    <div className="space-y-4">
      {biasResults.map((result) => (
        <div key={result.id} className={`p-4 rounded-lg border ${getSeverityClasses(result.severity)}`}>
            <div className="flex items-start space-x-3">
                <ExclamationTriangleIcon className="h-6 w-6 flex-shrink-0"/>
                <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-100">
                        {result.type} Bias ({result.severity})
                    </p>
                    <p className="mt-1 text-sm text-gray-300">
                        {result.explanation}
                    </p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default BiasAnalysis;
