import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

      <footer className="mt-16 border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Dhi Joshi</div>
          <div className="flex gap-4">
            <a className="font-semibold text-slate-700 hover:text-slate-900" href="/projects">Projects</a>
            <a className="font-semibold text-slate-700 hover:text-slate-900" href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
