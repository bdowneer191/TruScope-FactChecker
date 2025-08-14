
import React, { useState } from 'react';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

export interface Claim {
  id: string;
  claim_text: string;
  status: 'Verified' | 'Unverified' | 'Disputed';
  confidence: number;
  sources: string[];
}

interface AccordionItemProps {
    claim: Claim;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ claim }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getStatusClasses = (status: Claim['status']) => {
        switch (status) {
            case 'Verified': return 'bg-teal-500/10 text-teal-400';
            case 'Disputed': return 'bg-rose-500/10 text-rose-400';
            case 'Unverified': return 'bg-amber-500/10 text-amber-400';
        }
    };

    return (
        <div className="border-b border-gray-700">
            <h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full py-4 px-2 text-left text-gray-300 hover:bg-gray-800/50 transition-colors"
                    aria-expanded={isOpen}
                >
                    <span className="font-medium">{claim.claim_text}</span>
                    <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h3>
            <div className={`${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}>
                <div className="p-5 bg-gray-900/40">
                    <div className="flex items-center space-x-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClasses(claim.status)}`}>
                            {claim.status}
                        </span>
                        <div className="text-sm text-gray-400">
                            Confidence: <span className="font-bold text-gray-200">{claim.confidence}%</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-300">Sources:</h4>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-400">
                            {claim.sources.map((source, i) => <li key={i}>{source}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export interface ClaimsAnalysisProps {
  claims: Claim[];
}

/**
 * Displays a list of claims in an accordion-style interface, allowing users to expand each claim to see more details.
 */
export const ClaimsAnalysis: React.FC<ClaimsAnalysisProps> = ({ claims }) => {
  if (!claims || claims.length === 0) {
    return (
      <div className="text-center py-10 px-4 border-2 border-dashed border-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-200">No Claims Found</h3>
        <p className="mt-1 text-sm text-gray-400">The analysis did not identify any specific claims in the provided content.</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
        {claims.map((claim) => (
            <AccordionItem key={claim.id} claim={claim} />
        ))}
    </div>
  );
};

export default ClaimsAnalysis;
