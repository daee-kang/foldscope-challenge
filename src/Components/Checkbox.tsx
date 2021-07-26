import React, { ReactElement } from 'react';

interface Props {
    value: boolean,
    setter: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

export default function Checkbox({ value, setter, title }: Props): ReactElement {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setter(e.target.checked);
                    }}
                />
                {title}
            </label>
        </div>
    );
}
