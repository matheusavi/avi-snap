import React, { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import SnippetPreview from './components/SnippetPreview';
import { Theme } from './types';
import { DEFAULT_CODE } from './constants';

const App: React.FC = () => {
    const [code, setCode] = useState<string>(DEFAULT_CODE);
    const [language, setLanguage] = useState<string>('typescript');
    const [theme, setTheme] = useState<Theme>(Theme.Dark);
    const [padding, setPadding] = useState<number>(48);
    const [width, setWidth] = useState<number>(680);
    const [borderRadius, setBorderRadius] = useState<number>(12);
    const [isCopying, setIsCopying] = useState<boolean>(false);
    const [copyButtonText, setCopyButtonText] = useState<string>('Generate & Copy Image');
    
    const previewRef = useRef<HTMLDivElement>(null);

    const handleCopyImage = useCallback(async () => {
        if (!previewRef.current || isCopying) return;

        setIsCopying(true);
        setCopyButtonText('Generating...');

        try {
            const htmlToImage = (window as any).htmlToImage;
            if (!htmlToImage) {
                 throw new Error("html-to-image library not found.");
            }
            
            const blob = await htmlToImage.toBlob(previewRef.current, {
                pixelRatio: 2, // for higher resolution
            });
            
            if (blob) {
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]);
                setCopyButtonText('Copied to Clipboard!');
            } else {
                throw new Error("Failed to generate image blob.");
            }

        } catch (error) {
            console.error('Oops, something went wrong!', error);
            setCopyButtonText('Error! Try Again');
        } finally {
            setTimeout(() => {
                setIsCopying(false);
                setCopyButtonText('Generate & Copy Image');
            }, 2000);
        }
    }, [isCopying]);


    return (
        <div className="min-h-screen bg-slate-900 flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0 flex flex-col gap-8">
                    <Controls
                        language={language}
                        setLanguage={setLanguage}
                        theme={theme}
                        setTheme={setTheme}
                        padding={padding}
                        setPadding={setPadding}
                        width={width}
                        setWidth={setWidth}
                        borderRadius={borderRadius}
                        setBorderRadius={setBorderRadius}
                        onCopyImage={handleCopyImage}
                        isCopying={isCopying}
                        copyButtonText={copyButtonText}
                    />
                     <div className="flex-grow flex flex-col">
                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            spellCheck="false"
                            className="flex-grow w-full bg-slate-800 border border-slate-700 rounded-lg p-4 font-mono text-sm text-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                            aria-label="Code input"
                        />
                    </div>
                </div>

                <div className="lg:w-2/3 flex-grow flex items-center justify-center bg-dots rounded-lg p-4">
                    <div 
                        className="shadow-2xl overflow-hidden transition-all duration-300"
                        style={{ 
                            width: `${width}px`, 
                            maxWidth: '100%', 
                            borderRadius: `${borderRadius}px` 
                        }}
                    >
                       <SnippetPreview
                          ref={previewRef}
                          code={code}
                          language={language}
                          theme={theme}
                          padding={padding}
                          borderRadius={borderRadius}
                       />
                    </div>
                </div>
            </main>
             <style>{`
                .bg-dots {
                    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
                    background-size: 20px 20px;
                }
             `}</style>
        </div>
    );
};

export default App;