import { useRef } from 'react';
import * as React from 'react';

const MemoCount = () => {
  const countRef = useRef(0);
  return <div>{countRef.current++}</div>;
};

export default React.memo(MemoCount);
