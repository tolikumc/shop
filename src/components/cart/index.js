import React from 'react';
import { List, Button, Image } from 'semantic-ui-react';

export const Cart = ({ removeBook, item }) => {
  return (
    <List selection divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button
            onClick={() => {
              removeBook(item.id);
            }}
            color="red"
          >
            X
          </Button>
        </List.Content>
        <Image avatar src={item.image} />
        <List.Content>{item.title}</List.Content>
      </List.Item>
    </List>
  );
};
