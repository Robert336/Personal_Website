'use client'
import React, { useState } from 'react';
interface ButtonProps {
    toCopy: string,
    text: string,
}

export default function CopyButton(props: ButtonProps){
    
    function useCopyToClipboard() {
        const [result, setResult] = useState<
          null | { state: 'success' } | { state: 'error'; message: string }
        >(null);
      
        const copy = async (text: string) => {
          try {
            await navigator.clipboard.writeText(text);
            setResult({ state: 'success' });
          } catch (e) {
            setResult({ state: 'error', message: (e as Error).message });
            throw e;
          } finally {
            // 👇 Show the result feedback for 2 seconds
            setTimeout(() => {
              setResult(null);
            }, 2000);
          }
        };
      
        // 👇 We want the result as a tuple
        return [copy, result] as const;
      }
    
    const [copyToClipboard, copyResult] = useCopyToClipboard();

    const handleClickCopy = () => {
        // Copy the text from the input field into the clipboard
        copyToClipboard(props.toCopy);
    };

    return (
        <>
            <button onClick={handleClickCopy} className='p-1 pl-2 pr-2 border rounded hover:bg-white hover:text-gray-900'>
                {props.text}
            </button>
            <div>
                {copyResult?.state === 'success' && 'Copied successfully!'}
                {copyResult?.state === 'error' && `Error: ${copyResult.message}`}
            </div>
        </>
    )
}