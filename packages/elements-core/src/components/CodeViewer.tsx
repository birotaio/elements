import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-json';
import '@fifteen/stoplight-elements/styles.min.css';
import React, { useEffect, useRef } from 'react';

export type CodeProps = {
  code: string;
  language: string;
};

export default function Code({ code, language }: CodeProps) {
  const codeBlockRef = useRef<HTMLElement>(null);
  useEffect(() => {
    console.debug(codeBlockRef.current);
    if (codeBlockRef.current === null) {
      return;
    }
    Prism.highlightElement(codeBlockRef.current);
  }, [codeBlockRef, code, language]);
  return (
    <code ref={codeBlockRef} className={`language-${language}`}>
      {code}
    </code>
  );
}
