import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";

export const ItemCard = ({ title, price, author, image }) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
        <Card.Description>{price}<Icon name="usd"/></Card.Description>
      </Card.Content>
    </Card>
  );
};
