import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';


function Draft(props) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }

    return (
        <div>
            <Editor
                editorState={editorState}
                placeholder="Tell a story..."
                onChange={onEditorStateChange}
                autoCapitalize='characters'
            />
        </div>
    );
}

export default Draft;