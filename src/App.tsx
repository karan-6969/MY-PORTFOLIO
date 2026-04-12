import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import DPI from './pages/DPI';
import GitPeek from './pages/GitPeek';
import RouteX from './pages/RouteX';

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <div className="bg-background text-textMain min-h-screen font-inter flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/dpi" element={<DPI />} />
            <Route path="/projects/gitpeek" element={<GitPeek />} />
            <Route path="/projects/routex" element={<RouteX />} />
          </Routes>
        </main>
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
