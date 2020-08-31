import React from 'react';
import marked from 'marked';

const Preview =({visual})=>{
    const Text = marked(visual, { breaks: true });
    return(
                    <div className="principal-preview">
                        <div className="container-preview-title">
                            <h1 className="preview-title">Preview</h1>
                        </div>
                        <div className="container-preview">
                            <div id="preview"  dangerouslySetInnerHTML={{__html:Text }}>
                                
                            </div>
                        </div>
                    </div>
    )
}

export default Preview;