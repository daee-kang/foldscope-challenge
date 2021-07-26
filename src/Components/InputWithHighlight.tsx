import React, { ReactElement } from 'react';
import TextareaAutosize from 'react-textarea-autosize';


interface Props {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputWithHighlight({ text, setText }: Props): ReactElement {
    return (
        <div className="inputcontainer">
            <TextareaAutosize
                className="appinput"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setText(e.target.value);
                }}
            />
        </div>
    );
}
