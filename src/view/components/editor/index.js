import React, { useState, useEffect, memo } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import { useWindowWidth } from '@react-hook/window-size';

const CodeEditor = ({questionCode, isOnChange, fontSize, onSetQuestionState}) => {
    const [windowWidth, setWindowWidth] = useState();
    
    const size = useWindowWidth();

    useEffect(() => {
        if(size < 1000) {
            setWindowWidth(17)  
        }else if(size < 700){
            setWindowWidth(15)  
        }else {
            setWindowWidth(fontSize)
        }
    }, [fontSize, size, windowWidth])

   

    const styleEditor = {
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: windowWidth
    }
    console.log(styleEditor, '>')

    console.log(questionCode)
    return (
        <div className={'editor-content'}>
            <Editor
                value={questionCode}
                highlight={code => highlight(code, languages.js)}
                onValueChange={code => isOnChange && onSetQuestionState(code)}
                padding={10}
                style={styleEditor}
            />
        </div>
    )
};
export default memo(CodeEditor);