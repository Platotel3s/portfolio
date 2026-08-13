import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const MOCK_DATA = {
  name: "Syaiful Yudha Platoteles",
  role: "Web & Mobile Developer (3+ Years Experience)",
  languages: ["JavaScript","TypeScript","C","C++","PHP","Dart","Rust"],
  frameworks: ["React","Next.js","NestJS","Laravel","React Native","Flutter","Actix Web"],
  databases: ["MySQL","PostgreSQL","MongoDB"],
  tools: ["Git","Docker","SSH","Gitlab","Linux CLI","bash"]
};
function App() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4'>
      <div className='max-w-md w-full bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-700/50 flex flex-col gap-5 transition-all hover:scale-[1.01]'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-2xl font-bold tracking-tight text-white'>{MOCK_DATA.name}</h3>
          <p className='text-sm text-emerald-400 font-medium'>{MOCK_DATA.role}</p>
        </div>
        <div className='flex flex-col gap-4 my-2'>
          <div>
            <span className='text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2'>Languages</span>
            <div className='flex flex-wrap gap-1.5'>
              {MOCK_DATA.languages.map(lang => <span key={lang} className='text-xs px-2.5 py-1 bg-slate-700 text-slate-200 rounded-md font-mono'>{lang}</span>)}
            </div>
          </div>
          <div>
            <span className='text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2'>Frameworks</span>
            <div className='flex flex-wrap gap-1.5'>
              {MOCK_DATA.frameworks.map(fw => <span key={fw} className='text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md font-medium border border-emerald-500/20'>{fw}</span>)}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <span className='text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2'>Databases</span>
              <ul className='text-sm text-slate-300 list-disc list-inside space-y-0.5 font-sans'>
                {MOCK_DATA.databases.map(db => <li key={db}>{db}</li>)}
              </ul>
            </div>
            <div>
              <span className='text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2'>Dev Tools</span>
              <ul className='text-sm text-slate-300 list-disc list-inside space-y-0.5 font-sans'>
                {MOCK_DATA.tools.map(tool => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex gap-3 mt-2 border-t border-slate-700/50 pt-4'>
        <button 
          onClick={handleShare}
          className='flex-1 py-2.5 px-4 bg-slate-700 hover:bg-slate-600 active:scale-95 text-slate-200 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2'
        >
          {copied ? (
            <>
              <FontAwesomeIcon icon={faCheck} className="text-emerald-400" />
              <span>Copied URL</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faShareNodes} />
              <span>Share Profile</span>
            </>
          )}
        </button>
          <a 
            href="https://github.com/Platotel3s"
            className='flex-1 py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 text-sm font-bold rounded-xl text-center transition-all'
          >
            <FontAwesomeIcon icon={faGithub}/> Github
          </a>
        </div>

      </div>
    </div>
  )
}

export default App;

