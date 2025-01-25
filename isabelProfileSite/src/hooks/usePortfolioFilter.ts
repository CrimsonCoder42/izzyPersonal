// src/hooks/usePortfolioFilter.ts

import { useState } from 'react';
import { PortfolioItem } from '../types';

const usePortfolioFilter = (items: PortfolioItem[]) => {
  const [filter, setFilter] = useState<string>('All');

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter.toLowerCase());

  return { filter, setFilter, filteredItems };
};

export default usePortfolioFilter;
