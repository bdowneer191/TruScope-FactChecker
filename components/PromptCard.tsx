
import React from 'react';
import { CheckIcon, DocumentDuplicateIcon, CodeBracketIcon } from './icons';

interface ListItemProps {
    children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => (
    <li className="flex items-start space-x-3">
        <div className="flex-shrink-0">
            <CheckIcon className="h-6 w-6 text-green-400" />
        </div>
        <p className="text-gray-300">{children}</p>
    </li>
);

interface PromptSection {
    title: string;
    items: string[];
    type: 'list' | 'files' | 'code';
}

interface PromptCardProps {
    promptTitle: string;
    description: React.ReactNode;
    sections: PromptSection[];
    footerText?: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ promptTitle, description, sections, footerText }) => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg overflow-hidden mt-6 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-rose-400 tracking-wider uppercase">
                    {promptTitle}
                </h3>
                <div className="mt-4 text-gray-300 space-y-2">
                    {description}
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, sectionIndex) => (
                         <div key={sectionIndex}>
                             <h4 className="font-semibold text-gray-100">{section.title}</h4>
                             <ul className="mt-4 space-y-3">
                                 {section.items.map((item, itemIndex) => {
                                     if (section.type === 'list') {
                                         return <ListItem key={itemIndex}>{item}</ListItem>;
                                     }
                                     if (section.type === 'files') {
                                         return (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 pt-0.5">
                                                    <DocumentDuplicateIcon className="h-5 w-5 text-sky-400" />
                                                </div>
                                                <p className="text-gray-300">
                                                    <span className="font-mono bg-gray-700/50 py-0.5 px-1.5 rounded-md text-sky-300">{itemIndex + 1}. {item}</span>
                                                </p>
                                            </li>
                                         );
                                     }
                                     if (section.type === 'code') {
                                         return (
                                            <li key={itemIndex} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 pt-0.5">
                                                    <CodeBracketIcon className="h-5 w-5 text-amber-400" />
                                                </div>
                                                <p className="text-gray-300 font-mono text-sm bg-gray-700/50 py-0.5 px-1.5 rounded-md text-amber-300">
                                                    {item}
                                                </p>
                                            </li>
                                         );
                                     }
                                     return null;
                                 })}
                             </ul>
                         </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-900/50 px-6 py-3">
                <p className="text-sm text-gray-400">
                    {footerText || 'Include proper imports, exports, and TypeScript types for all files.'}
                </p>
            </div>
        </div>
    );
};

export default PromptCard;
