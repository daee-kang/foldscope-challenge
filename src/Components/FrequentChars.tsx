import { ReactElement, useEffect, useState } from 'react';
import { CharMap } from '../Types';
import CharCount from './CharCount';

interface Props {
    text: string;
}

export default function FrequentChars({ text }: Props): ReactElement {
    const [topFive, setTopFive] = useState<Set<string>>(new Set<string>());
    const [stringInOrder, setStringInOrder] = useState<string[]>([]);
    const [charCount, setCharCount] = useState<CharMap>({});

    //update our charmap when text changes
    useEffect(() => {
        let seen = new Set<string>();
        let map: CharMap = {};

        //we could keep this as a string, but I'd like to use the map method in render
        let removedDuplicates: string[] = [];
        for (let c of text) {
            if (map[c]) {
                map[c]++;
            } else {
                map[c] = 1;
            }

            if (seen.has(c)) continue;

            removedDuplicates.push(c);
            seen.add(c);
        }
        setStringInOrder(removedDuplicates);
        setCharCount(map);
        //so far this is O(n), just a linear scan and we removed duplicates
        //with this, we can use this string for our order in which we print

        //now we are left with a top k elements problem
        let arr = Object.entries(map);
        //sort by the amount of occurences
        arr.sort((a, b) => {
            return b[1] - a[1];
        });

        //we can use a set here because we don't care about the order of the top 5
        //we just want this to see if a char is in the top 5 per the instructions
        let top = new Set<string>();
        arr.slice(0, 5).forEach(char => top.add(char[0]));
        setTopFive(top);
        //this is O(n log n) due to the sort

        //O(n log n) + O(n) = O(n log n)
        //pretty performant to me!
    }, [text]); //don't add charmap as a dependency here, infinite render

    return (
        <div>
            {stringInOrder.map(char =>
                <CharCount
                    char={char}
                    count={charCount[char]}
                    topFive={topFive.has(char)}
                    key={char}
                />
            )}
        </div>
    );
}
