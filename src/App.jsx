import About from './sections/About';
import Features from './sections/Features';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-6 text-center shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-3xl font-bold tracking-tight">Zayvra</h1>
      </header>

      <main className="space-y-24">
        <About />
        <Features />
        <Contact />
      </main>

      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zayvra. All rights reserved.
      </footer>
    </div>
  );
}
