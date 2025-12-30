export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Contact</h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
               href="mailto:dhijoshiwork@gmail.com">
              dhijoshiwork@gmail.com
            </a>
            <a className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
               href="https://www.linkedin.com/in/dhijoshi" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
