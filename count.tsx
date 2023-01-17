import { useRef } from 'react';
import * as React from 'react';

const Count = () => {
  const countRef = useRef(0);
  return <div>{countRef.current++}</div>;
};

export default Count;
