import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link className="font-semibold text-slate-900" to="/">DJ</Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link className="text-slate-700 hover:underline" to="/projects">Projects</Link>
            <Link className="text-slate-700 hover:underline" to="/resume">Resume</Link>
            <Link className="text-slate-700 hover:underline" to="/about">About</Link>
            <Link className="text-slate-700 hover:underline" to="/contact">Contact</Link>
            <a className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
               href="mailto:dhijoshiwork@gmail.com">
              Hire me
            </a>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
