import React from 'react';
import { Button, Card, Icon, Image } from "semantic-ui-react";

export const ItemCard = ({ addToCart, ...props }) => {
  return (
    <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className="date">{props.author}</span>
        </Card.Meta>
        <Card.Description>{props.price}<Icon name="usd"/></Card.Description>
      </Card.Content>
      <Button onClick={()=>addToCart(props)}>Add to cart</Button>
    </Card>
  );
};
