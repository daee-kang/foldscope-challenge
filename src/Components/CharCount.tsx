import { ReactElement } from 'react';

interface Props {
    char: string,
    count: number;
    topFive: boolean;
}

export default function CharCount({ char, count, topFive }: Props): ReactElement {
    let displayChar = char;

    if (char === ' ') displayChar = 'space';
    if (char === '\n') displayChar = 'enter';

    return (
        <div className={'charCountContainer'}>
            <div className={`charCount ${topFive ? 'topFive' : null}`}>
                {displayChar}: {count}
            </div>
        </div>
    );
}
