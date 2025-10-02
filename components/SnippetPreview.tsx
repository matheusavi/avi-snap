import React, { useEffect, forwardRef } from 'react';
import { Theme } from '../types';

interface SnippetPreviewProps {
  code: string;
  language: string;
  theme: Theme;
  padding: number;
  borderRadius: number;
}

// Define the type for the ref to be forwarded
type Ref = HTMLDivElement;

const SnippetPreview = forwardRef<Ref, SnippetPreviewProps>((
  { code, language, theme, padding, borderRadius }, 
  ref
) => {
  const codeRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current && (window as any).Prism) {
      (window as any).Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const themeClasses = theme === Theme.Light 
    ? 'bg-slate-100 text-gray-800' 
    : 'bg-[#282c34] text-gray-100'; // okaidia theme background

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${themeClasses}`}
      style={{ 
        padding: `${padding}px`,
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden'
      }}
    >
      <pre className={`language-${language} !bg-transparent !p-0 !m-0 font-mono text-sm`}>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
});

export default SnippetPreview;