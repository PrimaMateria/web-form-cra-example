import React, { createRef, useCallback, useState } from "react";
import "./App.css";
import { FinApiWebForm } from "./WebForm";

function App() {
  const [formId, setFormId] = useState<string | undefined>();
  const [complete, setComplete] = useState<boolean>(false);

  const inputRef = createRef<HTMLInputElement>();

  const handleComplete = useCallback(() => {
    setFormId(undefined);
    setComplete(true);
  }, [setComplete]);

  const handleClick = useCallback(() => {
    const id = inputRef.current?.value;
    if (id) {
      setFormId(id);
      setComplete(false);
    }
  }, [setFormId, setComplete, inputRef]);

  return (
    <div className="App">
      <input ref={inputRef} />
      <button onClick={handleClick}>go</button>
      {formId && <FinApiWebForm formId={formId} onComplete={handleComplete} />}
      {complete && <div>Web Form completed</div>}
    </div>
  );
}

export default App;
