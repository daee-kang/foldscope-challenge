import { useEffect, useState } from 'react';
import './App.css';
import Checkbox from './Components/Checkbox';
import FrequentChars from './Components/FrequentChars';
import InputWithHighlight from './Components/InputWithHighlight';

function App() {
  /*
  Since the app is very simple, we will handle our main state changes here and pass it down
  */
  const [text, setText] = useState("");
  const [filteredText, setFilteredText] = useState("");
  const [isCaseSensitve, setIsCaseSensitive] = useState(true);
  const [isAlph, setIsAlph] = useState(false);

  useEffect(() => {
    let filtered = text;

    if (isAlph) {
      filtered = filtered.replace(/[^A-Za-z]/gi, '');
    }
    if (!isCaseSensitve) {
      filtered = filtered.toLowerCase();
    }

    setFilteredText(filtered);
  }, [text, isCaseSensitve, isAlph]);

  return (
    <div className="App">
      <div className="title">
        <h1>
          Spy Tool
        </h1>

        <Checkbox
          value={isCaseSensitve}
          setter={setIsCaseSensitive}
          title="Case Sensitive?"
        />

        <Checkbox
          value={isAlph}
          setter={setIsAlph}
          title="Only alphabet?"
        />
      </div>

      <InputWithHighlight
        text={text}
        setText={setText}
      />

      <FrequentChars
        text={filteredText}
      />
    </div>
  );
}

export default App;
