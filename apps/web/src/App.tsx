import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MarketingNav } from './components/MarketingNav'
import { FooterHonesty } from './components/FooterHonesty'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { ForReviewPage } from './pages/ForReviewPage'
import { DocsIndexPage } from './pages/docs/DocsIndexPage'
import { LanguageOfTrustPage } from './pages/docs/LanguageOfTrustPage'
import { DocsStubPage } from './pages/docs/DocsStubPage'
import { WaitlistPage } from './pages/WaitlistPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <MarketingNav />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/for-review" element={<ForReviewPage />} />
            <Route path="/waitlist" element={<WaitlistPage />} />
            <Route path="/docs" element={<DocsIndexPage />} />
            <Route path="/docs/language-of-trust" element={<LanguageOfTrustPage />} />
            <Route path="/docs/pipe" element={<DocsStubPage slug="pipe" />} />
            <Route path="/docs/claims" element={<DocsStubPage slug="claims" />} />
            <Route path="/docs/scores" element={<DocsStubPage slug="scores" />} />
            <Route path="/docs/mcp" element={<DocsStubPage slug="mcp" />} />
            <Route path="/docs/activity" element={<DocsStubPage slug="activity" />} />
            <Route path="/docs/local" element={<DocsStubPage slug="local" />} />
            {/* Legacy redirects from prior docs IA */}
            <Route path="/docs/pipeline" element={<Navigate to="/docs/pipe" replace />} />
            <Route
              path="/docs/claims-and-evidence"
              element={<Navigate to="/docs/claims" replace />}
            />
            <Route path="/docs/approve" element={<Navigate to="/docs/claims" replace />} />
            <Route path="/docs/company-brain" element={<Navigate to="/docs/pipe" replace />} />
            <Route path="/docs/ai-assistants" element={<Navigate to="/docs/mcp" replace />} />
            <Route path="/docs/install" element={<Navigate to="/docs/local" replace />} />
            <Route path="/docs/engineer-mode" element={<Navigate to="/docs" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <FooterHonesty />
      </div>
    </BrowserRouter>
  )
}
