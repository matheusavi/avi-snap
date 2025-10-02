
import React from 'react';

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-indigo-400">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);


const Header: React.FC = () => {
    return (
        <header className="text-center p-4 border-b border-slate-700">
            <div className="flex items-center justify-center gap-3 mb-2">
                <CodeIcon />
                <h1 className="text-3xl font-bold text-white tracking-tight">AviSnap</h1>
            </div>
            <p className="text-slate-400">Paste your code, get a beautiful PNG for your slides.</p>
        </header>
    );
};

export default Header;