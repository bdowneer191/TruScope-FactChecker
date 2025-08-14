import React from 'react';
import { RocketIcon, CubeTransparentIcon, ServerStackIcon, CpuChipIcon, SparklesIcon } from './icons';
import PromptCard from './PromptCard';

const promptA1 = {
    title: "Prompt A1: Next.js Foundation Setup",
    description: (
        <p>I'm building TruScope AI, an industry-leading fact-checker application. I need a Next.js 14 project foundation with TypeScript.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Next.js 14 with app directory structure",
                "TypeScript with strict mode enabled",
                "Tailwind CSS with custom configuration",
                "shadcn/ui component library setup",
                "Proper folder structure for scalability",
                "ESLint and Prettier configuration",
                "Basic routing setup"
            ],
        },
        {
            title: 'Please create these files:',
            type: 'files' as const,
            items: [
                "package.json - Include all necessary dependencies",
                "next.config.js - Optimized configuration",
                "tailwind.config.js - Custom theme setup",
                "tsconfig.json - Strict TypeScript config",
                "app/layout.tsx - Root layout with metadata",
                "app/page.tsx - Homepage component",
                ".eslintrc.json - ESLint configuration",
                ".prettierrc - Prettier configuration"
            ],
        }
    ]
};

const promptA2 = {
    title: "Prompt A2: Database Schema & Connection",
    description: (
        <p>I'm building TruScope AI fact-checker. I need a PostgreSQL database schema and connection setup for Next.js 14.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "PostgreSQL schema for fact-checking application",
                "Proper relationships and indexes",
                "TypeScript types for all database entities",
                "Connection utilities with error handling",
                "Migration-ready SQL structure",
            ],
        },
        {
            title: 'Database Tables Needed:',
            type: 'code' as const,
            items: [
                "articles: id, content, title, url, created_at, analysis_status, metadata",
                "claims: id, article_id, claim_text, status, confidence, sources, created_at",
                "sources: id, url, title, credibility_score, bias_rating, type, last_verified",
                "social_mentions: id, platform, url, content, sentiment, engagement, created_at",
                "fact_checks: id, claim_id, result, explanation, reviewer_type, confidence",
                "users: id, email, subscription_tier, usage_count, created_at",
            ],
        },
        {
            title: 'Please create these files:',
            type: 'files' as const,
            items: [
                "lib/database.sql - Complete schema with indexes",
                "lib/db.ts - Database connection and utilities",
                "types/database.ts - TypeScript interfaces for all tables",
                "lib/db-utils.ts - Helper functions for common queries"
            ],
        }
    ],
    footerText: "Include proper error handling and connection pooling."
};

const promptB1 = {
    title: "Prompt B1: Header & Navigation",
    description: (
        <p>I'm building TruScope AI fact-checker. I need a professional header component with navigation for a Next.js 14 app.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Modern, clean design with Tailwind CSS",
                "Responsive mobile navigation",
                "Brand logo and navigation links",
                "User authentication state handling",
                "Dark/light mode toggle",
                "Mobile hamburger menu",
                "TypeScript with proper props",
                "Accessibility compliance",
            ],
        },
        {
            title: 'Features needed:',
            type: 'list' as const,
            items: [
                "Navigation links: Home, Analyze, Dashboard, Pricing, About",
                "User menu when authenticated",
                "Search bar in header",
                "Notification badge",
                "Responsive breakpoints",
            ],
        },
        {
            title: 'Please create these files:',
            type: 'files' as const,
            items: [
                "components/ui/header.tsx - Main header component",
                "components/ui/mobile-menu.tsx - Mobile navigation",
                "components/ui/theme-toggle.tsx - Dark/light mode switch",
                "components/ui/user-menu.tsx - User dropdown menu",
            ],
        }
    ],
    footerText: "Include loading states, error boundaries, and proper TypeScript interfaces."
};

const promptB2 = {
    title: "Prompt B2: Input & Upload Interface",
    description: (
        <p>I'm building TruScope AI fact-checker. I need a comprehensive input interface for content analysis.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Multi-input support: text, URL, file upload",
                "Real-time character counting",
                "File type validation (PDF, DOCX, TXT)",
                "URL validation and preview",
                "Drag & drop file upload",
                "Progress indicators",
                "Error handling and validation",
                "TypeScript with strict typing",
                "Mobile-responsive design",
            ],
        },
        {
            title: 'Input Types:',
            type: 'list' as const,
            items: [
                "Text area with rich formatting options",
                "URL input with automatic content fetching",
                "File upload with drag & drop",
                "Batch processing options",
                "Content preview functionality",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "components/ui/input-section.tsx - Main input interface",
                "components/ui/file-upload.tsx - Drag & drop file upload",
                "components/ui/url-input.tsx - URL input with validation",
                "components/ui/text-input.tsx - Rich text area",
                "lib/validation/input-schemas.ts - Validation schemas",
            ],
        }
    ],
    footerText: "Include proper error handling, loading states, and accessibility features."
};

const promptB3 = {
    title: "Prompt B3: Analysis Dashboard Layout",
    description: (
        <p>I'm building TruScope AI fact-checker. I need dashboard components for displaying analysis results.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Tab-based navigation for different analysis views",
                "Animated progress bars and score cards",
                "Expandable sections for detailed results",
                "Export functionality integration",
                "Real-time updates support",
                "Mobile-responsive grid layout",
                "TypeScript with proper interfaces",
                "Loading states and error boundaries",
            ],
        },
        {
            title: 'Dashboard Sections:',
            type: 'list' as const,
            items: [
                "Overall credibility score",
                "Claims breakdown",
                "Source verification",
                "Social media mentions",
                "Bias analysis",
                "Export options",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "components/dashboard/score-card.tsx - Animated score display",
                "components/dashboard/claims-analysis.tsx - Claims breakdown",
                "components/dashboard/source-verification.tsx - Source credibility",
                "components/dashboard/bias-analysis.tsx - Bias detection results",
                "components/ui/tab-navigation.tsx - Tab system",
                "components/ui/progress-bar.tsx - Animated progress bars",
            ],
        }
    ],
    footerText: "Include proper animations, accessibility, and TypeScript types."
};

const promptC1 = {
    title: "Prompt C1: Main Analysis API",
    description: (
        <p>I'm building TruScope AI fact-checker. I need the main analysis API endpoint for Next.js 14 app router.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "POST /api/analyze endpoint",
                "Handle text, URL, and file inputs",
                "Orchestrate multiple analysis services",
                "Real-time progress updates",
                "Rate limiting and authentication",
                "Comprehensive error handling",
                "TypeScript with strict typing",
                "Response streaming for large content",
            ],
        },
        {
            title: 'Analysis Pipeline:',
            type: 'list' as const,
            items: [
                "Input validation and sanitization",
                "Content extraction and preprocessing",
                "Claim extraction using AI",
                "Multi-source verification",
                "Credibility scoring",
                "Social media analysis",
                "Bias detection",
                "Result compilation and caching",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "app/api/analyze/route.ts - Main analysis endpoint",
                "lib/analysis/analyzer.ts - Analysis orchestrator",
                "lib/validation/api-schemas.ts - Request/response schemas",
                "lib/middleware/rate-limit.ts - Rate limiting middleware",
                "lib/middleware/auth.ts - Authentication middleware",
            ],
        }
    ],
    footerText: "Include proper error handling, logging, and performance monitoring."
};

const promptC2 = {
    title: "Prompt C2: Source Verification API",
    description: (
        <p>I'm building TruScope AI fact-checker. I need source verification APIs for credibility checking.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "GET/POST /api/sources/verify endpoints",
                "Multiple source type handling",
                "Credibility scoring algorithms",
                "Bias detection and rating",
                "Historical reliability tracking",
                "Bulk verification support",
                "TypeScript with proper interfaces",
                "Caching for performance",
            ],
        },
        {
            title: 'Source Types:',
            type: 'list' as const,
            items: [
                "News websites and publications",
                "Academic journals and papers",
                "Government and official sources",
                "Social media platforms",
                "Forum discussions",
                "Wikipedia and wikis",
            ],
        },
        {
            title: 'Verification Factors:',
            type: 'list' as const,
            items: [
                "Domain authority and reputation",
                "Historical accuracy record",
                "Editorial standards",
                "Bias indicators",
                "Publication date relevance",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "app/api/sources/verify/route.ts - Source verification endpoint",
                "app/api/sources/batch/route.ts - Bulk verification",
                "lib/verification/credibility-scorer.ts - Scoring algorithms",
                "lib/verification/source-analyzer.ts - Source analysis",
                "lib/verification/bias-detector.ts - Bias detection",
                "types/sources.ts - Source-related types",
            ],
        }
    ],
    footerText: "Include comprehensive error handling and performance optimization."
};

const promptC3 = {
    title: "Prompt C3: Social Media Scrapers",
    description: (
        <p>I'm building TruScope AI fact-checker. I need social media scraping services for content verification.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Reddit, Twitter/X, Facebook scraping",
                "Respect rate limits and ToS",
                "Content sanitization and filtering",
                "Sentiment analysis integration",
                "Trend detection algorithms",
                "Error handling for blocked requests",
                "TypeScript with proper interfaces",
                "Ethical scraping practices",
            ],
        },
        {
            title: 'Platforms to Support:',
            type: 'list' as const,
            items: [
                "Reddit: Subreddit searches, comment analysis",
                "Twitter/X: Tweet searches, thread analysis",
                "Facebook: Public post analysis",
                "Instagram: Public content analysis",
                "TikTok: Video content analysis",
                "YouTube: Comment and video analysis",
            ],
        },
         {
            title: 'Data to Extract:',
            type: 'list' as const,
            items: [
                "Content text and metadata",
                "Engagement metrics",
                "User credibility indicators",
                "Sentiment indicators",
                "Viral spread patterns",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "lib/scrapers/reddit-scraper.ts - Reddit content analysis",
                "lib/scrapers/twitter-scraper.ts - Twitter/X verification",
                "lib/scrapers/social-analyzer.ts - Cross-platform analysis",
                "lib/scrapers/sentiment-analyzer.ts - Social sentiment",
                "lib/scrapers/trend-detector.ts - Viral content tracking",
                "lib/utils/scraping-utils.ts - Common utilities",
            ],
        }
    ],
    footerText: "Include rate limiting, error handling, and ethical considerations."
};

const promptC4 = {
    title: "Prompt C4: Academic & News Scrapers",
    description: (
        <p>I'm building TruScope AI fact-checker. I need scrapers for academic sources and news verification.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Academic database integration (ArXiv, PubMed, Google Scholar)",
                "News wire services (Reuters, AP, Bloomberg)",
                "Government source verification (.gov sites)",
                "Peer-review status checking",
                "Publication quality assessment",
                "TypeScript with proper error handling",
                "Respect for robots.txt and rate limits",
            ],
        },
        {
            title: 'Source Types:',
            type: 'list' as const,
            items: [
                "Academic Sources: ArXiv preprints, PubMed medical papers, Google Scholar citations",
                "News Sources: Major news publications, Wire services, Local news outlets",
                "Government Sources: Federal agency websites, Legislative documents, Official statistics",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "lib/scrapers/academic-scraper.ts - Academic source verification",
                "lib/scrapers/news-scraper.ts - News article analysis",
                "lib/scrapers/government-scraper.ts - Official source verification",
                "lib/scrapers/publication-analyzer.ts - Publication quality assessment",
                "lib/verification/peer-review-checker.ts - Peer review validation",
                "lib/utils/source-categorizer.ts - Source classification",
            ],
        }
    ],
    footerText: "Include comprehensive error handling and source quality metrics."
};

const promptD1 = {
    title: "Prompt D1: Claim Extraction & Verification",
    description: (
        <p>I'm building TruScope AI fact-checker. I need AI-powered claim extraction and verification using OpenAI GPT-4.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Extract factual claims from any text content",
                "Classify claims by verifiability",
                "Cross-reference against multiple sources",
                "Generate confidence scores",
                "Handle context and nuance",
                "Support multiple languages",
                "TypeScript with structured outputs",
                "Proper prompt engineering",
            ],
        },
        {
            title: 'Verification Process:',
            type: 'list' as const,
            items: [
                 "Parse and normalize claims",
                 "Generate search queries",
                 "Cross-reference multiple sources",
                 "Assess source credibility",
                 "Calculate confidence scores",
                 "Generate explanation summaries",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "lib/ai/claim-extractor.ts - GPT-4 claim extraction",
                "lib/ai/fact-verifier.ts - Multi-source verification",
                "lib/ai/confidence-scorer.ts - Confidence calculation",
                "lib/ai/prompt-templates.ts - Optimized prompts",
                "lib/ai/response-parser.ts - Structured output parsing",
                "types/claims.ts - Claim-related types",
            ],
        }
    ],
    footerText: "Include proper error handling, token management, and cost optimization."
};

const promptD2 = {
    title: "Prompt D2: Bias Detection & Analysis",
    description: (
        <p>I'm building TruScope AI fact-checker. I need an AI-powered bias detection and analysis system.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Detect multiple types of bias in content",
                "Analyze language patterns and word choice",
                "Identify missing perspectives",
                "Generate bias explanations",
                "Score bias severity",
                "Compare against neutral sources",
                "TypeScript with detailed analysis",
                "Multi-dimensional bias assessment",
            ],
        },
        {
            title: 'Analysis Framework:',
            type: 'list' as const,
            items: [
                "Language pattern analysis",
                "Source diversity assessment",
                "Perspective completeness check",
                "Emotional loading detection",
                "Statistical representation review",
                "Historical context consideration",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "lib/ai/bias-detector.ts - Multi-dimensional bias analysis",
                "lib/ai/language-analyzer.ts - Language pattern detection",
                "lib/ai/perspective-analyzer.ts - Missing viewpoint identification",
                "lib/ai/emotion-detector.ts - Emotional loading assessment",
                "lib/bias/bias-categories.ts - Bias classification system",
                "lib/bias/neutrality-scorer.ts - Neutrality assessment",
            ],
        }
    ],
    footerText: "Include detailed explanations and improvement suggestions."
};

const promptD3 = {
    title: "Prompt D3: Content Optimization System",
    description: (
        <p>I'm building TruScope AI fact-checker. I need an AI-powered SEO optimization system for content enhancement.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Keyword analysis and optimization",
                "Meta tag generation",
                "Schema.org markup creation",
                "Internal linking suggestions",
                "Content structure optimization",
                "Readability improvements",
                "TypeScript with SEO best practices",
                "Performance-focused optimization",
            ],
        },
        {
            title: 'Content Enhancement:',
            type: 'list' as const,
            items: [
                "Keyword density analysis",
                "Semantic keyword suggestions",
                "Content structure optimization",
                "Readability score improvement",
                "Meta data generation",
                "Schema markup creation",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "lib/seo/keyword-analyzer.ts - Keyword analysis and optimization",
                "lib/seo/meta-generator.ts - Meta tag generation",
                "lib/seo/schema-generator.ts - Schema.org markup",
                "lib/seo/content-optimizer.ts - Content structure optimization",
                "lib/seo/internal-linker.ts - Internal linking suggestions",
                "lib/seo/readability-analyzer.ts - Content readability assessment",
            ],
        }
    ],
    footerText: "Include performance metrics and optimization suggestions."
};

const promptE1 = {
    title: "Prompt E1: WebSocket & Real-time Updates",
    description: (
        <p>I'm building TruScope AI fact-checker. I need a real-time system for live analysis updates and notifications.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "WebSocket connection management",
                "Real-time analysis progress tracking",
                "Live notification system",
                "Connection resilience and reconnection",
                "Multiple client support",
                "TypeScript with proper event typing",
                "Performance optimization for concurrent users",
            ],
        },
        {
            title: 'Real-time Features:',
            type: 'list' as const,
            items: [
                "Analysis progress updates",
                "Live result streaming",
                "Collaborative fact-checking",
                "Real-time notifications",
                "Status synchronization",
                "Error broadcasting",
            ],
        },
        {
            title: 'Architecture Components:',
            type: 'list' as const,
            items: [
                "WebSocket server management",
                "Client connection handling",
                "Message broadcasting system",
                "Progress tracking interface",
                "Notification queueing",
                "Connection state management",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "lib/realtime/websocket-manager.ts - WebSocket server management",
                "lib/realtime/client-manager.ts - Client connection handling",
                "lib/realtime/notification-system.ts - Real-time notifications",
                "lib/realtime/progress-tracker.ts - Analysis progress tracking",
                "lib/realtime/message-broker.ts - Message routing system",
                "hooks/useWebSocket.ts - React WebSocket hook",
            ],
        }
    ],
    footerText: "Include connection resilience, error handling, and performance optimization."
};

const promptE2 = {
    title: "Prompt E2: Caching & Performance System",
    description: (
        <p>I'm building TruScope AI fact-checker. I need a comprehensive caching and performance optimization system.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "Multi-level caching strategy",
                "Redis integration for session data",
                "Database query optimization",
                "API response caching",
                "Static asset optimization",
                "TypeScript with cache interfaces",
                "Performance monitoring and metrics",
            ],
        },
        {
            title: 'Caching Layers:',
            type: 'list' as const,
            items: [
                "Browser cache for static content",
                "CDN cache for global distribution",
                "Application cache for API responses",
                "Database query result cache",
                "Session and user data cache",
                "Analysis result cache",
            ],
        },
        {
            title: 'Performance Features:',
            type: 'list' as const,
            items: [
                "Intelligent cache invalidation",
                "Cache warming strategies",
                "Performance metric collection",
                "Bottleneck identification",
                "Resource usage optimization",
                "Response time monitoring",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "lib/cache/redis-cache.ts - Redis caching implementation",
                "lib/cache/memory-cache.ts - In-memory caching",
                "lib/cache/cache-manager.ts - Cache orchestration",
                "lib/performance/monitor.ts - Performance monitoring",
                "lib/performance/metrics.ts - Performance metrics",
                "lib/optimization/query-optimizer.ts - Database optimization",
            ],
        }
    ],
    footerText: "Include cache invalidation strategies and performance analytics."
};

const promptE3 = {
    title: "Prompt E3: Analytics & Reporting System",
    description: (
        <p>I'm building TruScope AI fact-checker. I need a comprehensive analytics and reporting system.</p>
    ),
    sections: [
        {
            title: 'Requirements:',
            type: 'list' as const,
            items: [
                "User behavior tracking",
                "Analysis usage statistics",
                "Performance metrics dashboard",
                "Custom report generation",
                "Data visualization components",
                "Export functionality (PDF, CSV, JSON)",
                "TypeScript with analytics interfaces",
                "Privacy-compliant data collection",
            ],
        },
        {
            title: 'Analytics Features:',
            type: 'list' as const,
            items: [
                "User engagement metrics",
                "Analysis accuracy tracking",
                "Source verification statistics",
                "Popular content analysis",
                "Performance benchmarking",
                "Error rate monitoring",
            ],
        },
        {
            title: 'Dashboard Components:',
            type: 'list' as const,
            items: [
                "Real-time usage statistics",
                "Historical trend analysis",
                "User behavior insights",
                "System performance metrics",
                "Content analysis reports",
                "Custom report builder",
            ],
        },
        {
            title: 'Please create:',
            type: 'files' as const,
            items: [
                "components/analytics/dashboard.tsx - Main analytics dashboard",
                "lib/analytics/data-collector.ts - Data collection system",
                "lib/analytics/report-generator.ts - Custom report generation",
                "lib/analytics/metrics-calculator.ts - Metrics calculation",
                "lib/analytics/export-manager.ts - Multi-format exports",
                "components/charts/usage-charts.tsx - Data visualization",
            ],
        }
    ],
    footerText: "Include privacy compliance and real-time data updates."
};


const HomePage: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
             <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-rose-500 to-purple-400"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
            </div>
            <main className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                        TruScope AI <span className="text-rose-400">-</span> Modular AI Prompt Templates
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        Copy-Paste Ready Development Prompts
                    </p>
                </div>

                <div className="mt-16 sm:mt-20">
                    <div className="relative">
                         <div className="absolute -top-4 -left-4 w-48 h-48 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
                         <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-rose-500 rounded-full opacity-10 blur-3xl"></div>
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-800/80 border border-gray-700 rounded-full">
                                <RocketIcon className="w-8 h-8 text-rose-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 tracking-tight">PHASE 1: FOUNDATION & ARCHITECTURE</h2>
                                <p className="text-gray-400 text-lg">1.1 Project Initialization</p>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent -translate-y-1/2 -z-10"></div>
                    </div>

                    <PromptCard 
                        promptTitle={promptA1.title}
                        description={promptA1.description}
                        sections={promptA1.sections}
                    />

                    <PromptCard 
                        promptTitle={promptA2.title}
                        description={promptA2.description}
                        sections={promptA2.sections}
                        footerText={promptA2.footerText}
                    />
                </div>

                <div className="mt-20 pt-16 border-t border-gray-800/50">
                     <div className="relative">
                         <div className="absolute -top-4 -left-4 w-48 h-48 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
                         <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-800/80 border border-gray-700 rounded-full">
                                <CubeTransparentIcon className="w-8 h-8 text-teal-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 tracking-tight">PHASE 2: CORE COMPONENTS</h2>
                                <p className="text-gray-400 text-lg">2.1 UI Foundation Components</p>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent -translate-y-1/2 -z-10"></div>
                    </div>
                    
                    <PromptCard 
                        promptTitle={promptB1.title}
                        description={promptB1.description}
                        sections={promptB1.sections}
                        footerText={promptB1.footerText}
                    />

                    <PromptCard 
                        promptTitle={promptB2.title}
                        description={promptB2.description}
                        sections={promptB2.sections}
                        footerText={promptB2.footerText}
                    />

                    <PromptCard 
                        promptTitle={promptB3.title}
                        description={promptB3.description}
                        sections={promptB3.sections}
                        footerText={promptB3.footerText}
                    />
                </div>
                
                <div className="mt-20 pt-16 border-t border-gray-800/50">
                     <div className="relative">
                         <div className="absolute -top-4 -left-4 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
                         <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-800/80 border border-gray-700 rounded-full">
                                <ServerStackIcon className="w-8 h-8 text-purple-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 tracking-tight">PHASE 3: BACKEND SERVICES</h2>
                                <p className="text-gray-400 text-lg">3.1 API Route Architecture</p>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -translate-y-1/2 -z-10"></div>
                    </div>
                    
                    <PromptCard 
                        promptTitle={promptC1.title}
                        description={promptC1.description}
                        sections={promptC1.sections}
                        footerText={promptC1.footerText}
                    />

                    <PromptCard 
                        promptTitle={promptC2.title}
                        description={promptC2.description}
                        sections={promptC2.sections}
                        footerText={promptC2.footerText}
                    />
                     <div className="relative mt-12">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12"></div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-300 tracking-tight">3.2 Multi-Source Scraping Services</h2>
                            </div>
                        </div>
                    </div>
                     <PromptCard 
                        promptTitle={promptC3.title}
                        description={promptC3.description}
                        sections={promptC3.sections}
                        footerText={promptC3.footerText}
                    />
                     <PromptCard 
                        promptTitle={promptC4.title}
                        description={promptC4.description}
                        sections={promptC4.sections}
                        footerText={promptC4.footerText}
                    />
                </div>

                <div className="mt-20 pt-16 border-t border-gray-800/50">
                     <div className="relative">
                         <div className="absolute -top-4 -left-4 w-48 h-48 bg-lime-500 rounded-full opacity-10 blur-3xl"></div>
                         <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-800/80 border border-gray-700 rounded-full">
                                <CpuChipIcon className="w-8 h-8 text-lime-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 tracking-tight">PHASE 4: AI INTEGRATION</h2>
                                <p className="text-gray-400 text-lg">4.1 Core AI Analysis Engine</p>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent -translate-y-1/2 -z-10"></div>
                    </div>
                    
                    <PromptCard 
                        promptTitle={promptD1.title}
                        description={promptD1.description}
                        sections={promptD1.sections}
                        footerText={promptD1.footerText}
                    />

                    <PromptCard 
                        promptTitle={promptD2.title}
                        description={promptD2.description}
                        sections={promptD2.sections}
                        footerText={promptD2.footerText}
                    />

                    <div className="relative mt-12">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12"></div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-300 tracking-tight">4.2 SEO Enhancement Engine</h2>
                            </div>
                        </div>
                    </div>

                     <PromptCard 
                        promptTitle={promptD3.title}
                        description={promptD3.description}
                        sections={promptD3.sections}
                        footerText={promptD3.footerText}
                    />
                </div>

                <div className="mt-20 pt-16 border-t border-gray-800/50">
                     <div className="relative">
                         <div className="absolute -top-4 -left-4 w-48 h-48 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
                         <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-800/80 border border-gray-700 rounded-full">
                                <SparklesIcon className="w-8 h-8 text-yellow-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 tracking-tight">PHASE 5: ADVANCED FEATURES</h2>
                                <p className="text-gray-400 text-lg">5.1 Real-time System Architecture</p>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent -translate-y-1/2 -z-10"></div>
                    </div>

                    <PromptCard 
                        promptTitle={promptE1.title}
                        description={promptE1.description}
                        sections={promptE1.sections}
                        footerText={promptE1.footerText}
                    />

                    <PromptCard 
                        promptTitle={promptE2.title}
                        description={promptE2.description}
                        sections={promptE2.sections}
                        footerText={promptE2.footerText}
                    />

                    <div className="relative mt-12">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12"></div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-300 tracking-tight">5.2 Analytics & Reporting</h2>
                            </div>
                        </div>
                    </div>
                     <PromptCard 
                        promptTitle={promptE3.title}
                        description={promptE3.description}
                        sections={promptE3.sections}
                        footerText={promptE3.footerText}
                    />
                </div>


                <div className="text-center mt-20 text-gray-500">
                    <p>More prompts for other phases and components coming soon.</p>
                </div>
            </main>
        </div>
    );
};

export default HomePage;