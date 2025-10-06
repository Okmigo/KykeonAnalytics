import { Route, Routes } from 'react-router-dom';
import { TopNav } from './components/TopNav.jsx';
import { Footer } from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServicesOrganizations from './pages/ServicesOrganizations.jsx';
import ServicesUsers from './pages/ServicesUsers.jsx';
import Insights from './pages/Insights.jsx';
import Results from './pages/Results.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';
import Blog from './pages/Blog.jsx';
import Legal from './pages/Legal.jsx';
import MarketMonitoring from './pages/MarketMonitoring.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 bg-mesh bg-cover bg-fixed bg-center text-slate-100">
      <a href="#main" className="focus-ring">
        Skip to content
      </a>
      <TopNav />
      <main id="main" className="relative mx-auto flex max-w-7xl flex-1 flex-col px-6 pb-24 pt-10 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/organizations" element={<ServicesOrganizations />} />
          <Route path="/services/users" element={<ServicesUsers />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/market-monitoring" element={<MarketMonitoring />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
