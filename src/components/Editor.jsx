import React from 'react'

const Editor=({visual,Change}) => {
    return (
                <div className="principal-editor">
                       <div className="container-editor-title">
                            <h1 className="editor-title">Editor</h1>
                        </div>
                        <div className="container-editor">
                            <textarea id="editor" onChange={Change} defaultValue={visual} />
                            
                        </div>
                </div>
    )
}


export default Editor;