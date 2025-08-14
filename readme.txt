TruScope AI - Master Specification
Industry-Leading Fact-Checker Development Plan
Show Image Show Image Show Image Show Image

🎯 Unique Industry-First Features
Multi-Source Intelligence Engine
Social Media Verification: Real-time checks across Twitter, Facebook, Instagram, TikTok
Forum Analysis: Deep scraping of Reddit, Quora, Stack Exchange, specialized forums
Academic Source Integration: ArXiv, PubMed, Google Scholar, institutional repositories
News Wire Services: Reuters, AP, Bloomberg, specialized industry feeds
Government/Official Sources: .gov sites, regulatory bodies, official statements
Multimedia Verification: Reverse image search, video authenticity, audio analysis
Real-time Trend Analysis: Viral misinformation tracking, emerging narrative detection
Cross-platform Sentiment Analysis: Public opinion tracking across platforms
Advanced AI Features
Contextual Understanding: Historical context, cultural nuances, regional variations
Bias Pattern Recognition: Systematic bias detection across multiple dimensions
Narrative Tracking: Following story evolution across time and platforms
Expert Network Integration: Academic expert opinions, professional fact-checkers
Multilingual Verification: Cross-language fact-checking and translation verification

📋 Project Architecture
TruScope-AI/
├── frontend/                 # Next.js 14 + React
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── types/
├── backend/                  # Node.js + Express (API Routes)
├── database/                 # PostgreSQL + Vercel Blob
├── ai-services/              # OpenAI + Custom APIs
├── scraping/                 # Multi-source data collection
├── analytics/                # Performance tracking
└── deployment/               # Vercel configuration

🚀 Development Phases
Phase 1: Foundation & Architecture Setup
1.1 Project Initialization
AI Prompt Template:
Create a Next.js 14 project with TypeScript, Tailwind CSS, and the following structure:
- app/ directory structure
- components/ with ui/ subfolder  
- lib/ for utilities and database
- types/ for TypeScript definitions
- Include: shadcn/ui setup, Vercel Blob configuration, basic routing
Required Files:
File
Purpose
package.json
Dependencies and scripts
next.config.js
Next.js configuration
tailwind.config.js
Tailwind setup
tsconfig.json
TypeScript configuration
app/layout.tsx
Root layout
app/page.tsx
Homepage
lib/db.ts
Database connection setup

1.2 Database Schema Design
AI Prompt Template:
Create PostgreSQL schema for fact-checking app with tables:
- articles (id, content, title, url, created_at, analysis_status)
- claims (id, article_id, claim_text, status, confidence, sources)
- sources (id, url, title, credibility_score, bias_rating, type)
- social_mentions (id, platform, url, content, sentiment, created_at)
- fact_checks (id, claim_id, result, explanation, reviewer_type)
Include proper indexes and relationships
Required Files:
File
Purpose
lib/database.sql
Complete schema
lib/db-utils.ts
Database helper functions
types/database.ts
TypeScript types for all tables


Phase 2: Core Components
2.1 UI Foundation Components
AI Prompt Template:
Create reusable UI components using shadcn/ui and Tailwind:
- Header with navigation and branding
- InputSection with textarea, file upload, URL input
- TabNavigation for different analysis views
- LoadingSpinner with progress indicators
- ResultCard components for displaying analysis
- SEOForm for enhanced content generation
All components should be TypeScript with proper props
Required Files:
File
Purpose
components/ui/header.tsx
Main navigation header
components/ui/input-section.tsx
Content input interface
components/ui/tab-navigation.tsx
Analysis view tabs
components/ui/loading-spinner.tsx
Loading indicators
components/ui/result-card.tsx
Analysis result display
components/ui/seo-form.tsx
SEO enhancement form

2.2 Analysis Dashboard Components
AI Prompt Template:
Create analysis dashboard components:
- ScoreCard with animated progress bars
- ClaimsAnalysis with expandable claim items
- SourceVerification with credibility indicators
- SocialMediaMentions with platform icons
- SchemaGenerator for JSON-LD output
- ExportOptions with multiple format support
Include proper loading states and error handling
Required Files:
File
Purpose
components/dashboard/score-card.tsx
Analysis score display
components/dashboard/claims-analysis.tsx
Claims breakdown
components/dashboard/source-verification.tsx
Source credibility
components/dashboard/social-mentions.tsx
Social media analysis
components/dashboard/schema-generator.tsx
JSON-LD generation
components/dashboard/export-options.tsx
Export functionality


Phase 3: Backend Services
3.1 API Route Structure
AI Prompt Template:
Create Next.js API routes for:
- /api/analyze - Main analysis endpoint
- /api/sources/verify - Source verification
- /api/social/search - Social media scraping
- /api/claims/check - Individual claim checking
- /api/export - Content export functionality
- /api/seo/optimize - SEO enhancement
Include proper error handling, rate limiting, and TypeScript
Required Files:
File
Purpose
app/api/analyze/route.ts
Main analysis endpoint
app/api/sources/verify/route.ts
Source verification
app/api/social/search/route.ts
Social media scraping
app/api/claims/check/route.ts
Individual claim checking
app/api/export/route.ts
Content export
app/api/seo/optimize/route.ts
SEO optimization

3.2 Multi-Source Scraping Services
AI Prompt Template:
Create scraping services for multiple sources:
- RedditScraper: Search relevant subreddits, analyze comments
- TwitterScraper: Tweet analysis, trend detection
- QuoraScraper: Q&A content analysis
- NewsScraper: News article verification
- AcademicScraper: Scholarly source checking
- GovernmentScraper: Official source verification
Include rate limiting, error handling, and data sanitization
Required Files:
File
Purpose
lib/scrapers/reddit-scraper.ts
Reddit content analysis
lib/scrapers/twitter-scraper.ts
Twitter verification
lib/scrapers/quora-scraper.ts
Quora Q&A analysis
lib/scrapers/news-scraper.ts
News article verification
lib/scrapers/academic-scraper.ts
Scholarly sources
lib/scrapers/government-scraper.ts
Official sources


Phase 4: AI Integration
4.1 AI Analysis Engine
AI Prompt Template:
Create AI analysis engine with:
- ClaimExtractor: Extract factual claims from text
- FactVerifier: Verify claims against multiple sources
- BiasDetector: Identify potential bias patterns
- CredibilityScorer: Score source reliability
- SentimentAnalyzer: Analyze social media sentiment
- SchemaGenerator: Generate proper Schema.org markup
Use OpenAI GPT-4 with structured outputs and proper prompt engineering
Required Files:
File
Purpose
lib/ai/claim-extractor.ts
Extract factual claims
lib/ai/fact-verifier.ts
Verify against sources
lib/ai/bias-detector.ts
Detect bias patterns
lib/ai/credibility-scorer.ts
Score source reliability
lib/ai/sentiment-analyzer.ts
Social sentiment analysis
lib/ai/schema-generator.ts
Schema.org markup

4.2 SEO Enhancement Engine
AI Prompt Template:
Create SEO optimization system:
- KeywordAnalyzer: Extract and analyze target keywords
- InternalLinkOptimizer: Suggest internal linking opportunities
- ContentEnhancer: Improve content for SEO
- SchemaOptimizer: Generate comprehensive schema markup
- MetaGenerator: Create optimized meta tags
- PerformanceAnalyzer: Analyze SEO performance metrics
Required Files:
File
Purpose
lib/seo/keyword-analyzer.ts
Keyword analysis
lib/seo/internal-link-optimizer.ts
Internal linking
lib/seo/content-enhancer.ts
Content optimization
lib/seo/schema-optimizer.ts
Schema markup
lib/seo/meta-generator.ts
Meta tag generation
lib/seo/performance-analyzer.ts
SEO metrics


Phase 5: Advanced Features
5.1 Real-time Verification System
AI Prompt Template:
Create real-time verification features:
- WebSocketManager: Real-time updates during analysis
- NotificationSystem: Alert users of verification status
- CacheManager: Efficient caching of analysis results
- QueueManager: Handle multiple analysis requests
- ProgressTracker: Show detailed analysis progress
Include proper error handling and reconnection logic
Required Files:
File
Purpose
lib/realtime/websocket-manager.ts
WebSocket connections
lib/realtime/notification-system.ts
User notifications
lib/realtime/cache-manager.ts
Result caching
lib/realtime/queue-manager.ts
Request queuing
lib/realtime/progress-tracker.ts
Progress tracking

5.2 Analytics & Reporting
AI Prompt Template:
Create analytics and reporting system:
- AnalyticsDashboard: Usage statistics and trends
- ReportGenerator: Comprehensive analysis reports
- ExportManager: Multiple export formats (PDF, JSON, CSV)
- PerformanceMonitor: Track application performance
- UserInsights: User behavior analysis
Include proper data visualization and charting
Required Files:
File
Purpose
components/analytics/analytics-dashboard.tsx
Usage analytics
lib/analytics/report-generator.ts
Report generation
lib/analytics/export-manager.ts
Export functionality
lib/analytics/performance-monitor.ts
Performance tracking
lib/analytics/user-insights.ts
User behavior


Phase 6: Deployment Preparation
6.1 Vercel Configuration
AI Prompt Template:
Create Vercel deployment configuration:
- vercel.json with proper settings
- Environment variable setup
- Build optimization configuration
- Database migration scripts
- Edge function setup for global performance
Include proper error pages and redirects
Required Files:
File
Purpose
vercel.json
Vercel configuration
.env.example
Environment variables
scripts/migrate.js
Database migrations
scripts/deploy.sh
Deployment script
middleware.ts
Edge middleware

6.2 Performance Optimization
AI Prompt Template:
Create performance optimization features:
- Image optimization configuration
- API response caching
- Database query optimization
- Bundle size optimization
- Lazy loading implementation
Include monitoring and alerting setup
Required Files:
File
Purpose
next.config.js (optimized)
Build optimization
lib/cache/redis-cache.ts
Redis caching
lib/optimization/image-optimizer.ts
Image optimization
lib/optimization/bundle-analyzer.js
Bundle analysis


📋 AI Coding Strategy Guidelines
For Each Development Phase:
Always start with: "I'm building [specific feature] for an industry-leading fact-checker. I need..."
Specify requirements:
TypeScript with strict mode
Next.js 14 app directory
Tailwind CSS for styling
Proper error handling
Loading states for all async operations
Mobile-responsive design
Accessibility compliance
Request specific file structure:
Include imports and exports
Add proper TypeScript types
Include error boundaries
Add loading states
Include proper documentation
Testing approach:
Request test files for critical components
Include mock data for development
Add proper validation schemas
Integration considerations:
Ensure components work together
Include proper prop drilling or state management
Add proper API error handling

🔄 Development Workflow
Daily Development Cycle:
Morning: Request 2-3 related components
Afternoon: Request API routes and backend logic
Evening: Request integration and testing files
Weekly Milestones:
Week 1: Foundation and basic components
Week 2: Analysis engine and scraping services
Week 3: Advanced features and integrations
Week 4: Testing, optimization, and deployment

✅ Quality Assurance Checklist
All components have TypeScript types
Error handling in all async operations
Loading states for better UX
Mobile responsiveness
Accessibility features
Performance optimizations
Proper SEO implementation
Security considerations
Database migrations
API documentation

🛠️ Technology Stack
Frontend
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
UI Components: shadcn/ui
State Management: Zustand/React Context
Backend
Runtime: Node.js
Framework: Next.js API Routes
Database: PostgreSQL
Storage: Vercel Blob
Cache: Redis
AI & Analytics
AI Provider: OpenAI GPT-4
Analytics: Custom analytics system
Monitoring: Vercel Analytics
Deployment
Platform: Vercel
CDN: Vercel Edge Network
CI/CD: GitHub Actions

📚 Getting Started
Clone the repository
Follow Phase 1 development plan
Use AI prompt templates for each module
Follow the weekly milestones
Complete QA checklist before deployment

This Master Spec ensures systematic development without overwhelming AI or missing critical features. Each phase builds upon the previous one, maintaining consistency and preventing hallucinations.


