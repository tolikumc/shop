import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

export const Filter = ({
  filterBy,
  toggleFilter,
  searchQuery,
  setSearchQuery
}) => {
  return (
    <Menu secondary>
      <Menu.Item
        active={filterBy === 'all'}
        onClick={() => toggleFilter('all')}
      >
        All
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'popular'}
        onClick={() => toggleFilter('popular')}
      >
        Popular
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={() => toggleFilter('price_high')}
      >
        Price (expensive)
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={() => toggleFilter('price_low')}
      >
        Price(inexpensive)
      </Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={() => toggleFilter('author')}
      >
        Author
      </Menu.Item>
      <Menu.Item>
        <Input
          placeholder="Enter..."
          icon="search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </Menu.Item>
    </Menu>
  );
};
