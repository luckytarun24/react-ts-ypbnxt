import * as React from 'react';
import { useState } from 'react';
import Count from './count';
import MemoCount from './memoCount';
import './style.css';

export default function App() {
  const [state, setState] = useState(false);
  return (
    <div>
      <div>without memo</div>
      <button onClick={() => setState(!state)}>click me</button>
      {state && <div>I am visible now</div>}
      <Count />
      <div>with memo</div>
      <button onClick={() => setState(!state)}>click me</button>
      {state && <div>I am visible now</div>}
      <MemoCount />
    </div>
  );
}
