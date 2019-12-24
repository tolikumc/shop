import React from "react";
import { Menu } from "semantic-ui-react";

export const Header = () => {

  return (
    <Menu>
      <Menu.Item
        name='browse'
      >
        Books shop
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          name='signup'
        >
          Total: &nbsp;<b>0</b> &nbsp;USD
        </Menu.Item>

        <Menu.Item
          name='help'
        >
          Cart: &nbsp;(<b>0</b>)
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
