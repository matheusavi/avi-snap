import React from 'react';
import { Language, Theme } from '../types';
import { LANGUAGES } from '../constants';

interface ControlsProps {
  language: string;
  setLanguage: (lang: string) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  padding: number;
  setPadding: (padding: number) => void;
  width: number;
  setWidth: (width: number) => void;
  borderRadius: number;
  setBorderRadius: (radius: number) => void;
  onCopyImage: () => void;
  isCopying: boolean;
  copyButtonText: string;
}

const ControlSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-400">{title}</label>
        {children}
    </div>
);

const Controls: React.FC<ControlsProps> = ({ 
    language, 
    setLanguage, 
    theme, 
    setTheme, 
    padding, 
    setPadding, 
    width,
    setWidth,
    borderRadius,
    setBorderRadius,
    onCopyImage,
    isCopying,
    copyButtonText
}) => {
    return (
        <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-white">Customize</h2>
            
            <ControlSection title="Language">
                <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    aria-label="Select programming language"
                >
                    {LANGUAGES.map((lang: Language) => (
                        <option key={lang.value} value={lang.value}>{lang.label}</option>
                    ))}
                </select>
            </ControlSection>

            <ControlSection title="Theme">
                 <div className="grid grid-cols-2 gap-2">
                    <button 
                        onClick={() => setTheme(Theme.Light)} 
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${theme === Theme.Light ? 'bg-indigo-600 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}
                        aria-pressed={theme === Theme.Light}
                    >
                        Light
                    </button>
                     <button 
                        onClick={() => setTheme(Theme.Dark)} 
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${theme === Theme.Dark ? 'bg-indigo-600 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}
                        aria-pressed={theme === Theme.Dark}
                    >
                        Dark
                    </button>
                </div>
            </ControlSection>
            
            <ControlSection title="Padding">
                <div className="flex items-center gap-3">
                    <input 
                        type="range" 
                        min="16" 
                        max="128" 
                        step="8" 
                        value={padding} 
                        onChange={(e) => setPadding(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        aria-label="Padding amount"
                    />
                    <span className="text-sm bg-slate-700 rounded-md px-2 py-1 w-12 text-center tabular-nums">{padding}px</span>
                </div>
            </ControlSection>

            <ControlSection title="Width">
                <div className="flex items-center gap-3">
                    <input 
                        type="range" 
                        min="400" 
                        max="1200" 
                        step="10" 
                        value={width} 
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        aria-label="Snippet width"
                    />
                    <span className="text-sm bg-slate-700 rounded-md px-2 py-1 w-16 text-center tabular-nums">{width}px</span>
                </div>
            </ControlSection>
            
            <ControlSection title="Rounded Corners">
                <div className="flex items-center gap-3">
                    <input 
                        type="range" 
                        min="0" 
                        max="48" 
                        step="2" 
                        value={borderRadius} 
                        onChange={(e) => setBorderRadius(Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        aria-label="Border radius amount"
                    />
                    <span className="text-sm bg-slate-700 rounded-md px-2 py-1 w-12 text-center tabular-nums">{borderRadius}px</span>
                </div>
            </ControlSection>

            <div className="mt-4 border-t border-slate-700 pt-6">
                <button
                    onClick={onCopyImage}
                    disabled={isCopying}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-300"
                    aria-live="polite"
                >
                    {isCopying && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                    {copyButtonText}
                </button>
            </div>
        </div>
    );
};

export default Controls;