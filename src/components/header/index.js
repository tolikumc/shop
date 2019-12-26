import React from 'react';
import { Menu, Popup } from 'semantic-ui-react';
import { Cart } from '../cart';

export const Header = ({ totalPrice, items, removeBook }) => {
  return (
    <Menu>
      <Menu.Item name="browse">Books shop</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item name="signup">
          Total: &nbsp;<b>{totalPrice}</b> &nbsp;USD
        </Menu.Item>

        <Popup
          trigger={
            <Menu.Item name="help">
              Cart: &nbsp;(<b>0</b>)
            </Menu.Item>
          }
          content={items.map(item => (
            <Cart item={item} removeBook={removeBook}/>
          ))}
          on="click"
          hideOnScroll
        />
      </Menu.Menu>
    </Menu>
  );
};
