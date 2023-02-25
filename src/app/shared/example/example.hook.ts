import React, { useState } from 'react';

export function useExample() {
  const list = ['Education', 'Science', 'Art', 'Sport', 'Games', 'Health'];
  const [state, openDropdown] = useState(false);
  const [selected, setSelected] = useState('1');

  return [state, list, openDropdown, selected, setSelected] as const;
}
