import React from 'react';

import {Container, CardImage} from './styles';

interface CardGameProps {
  uri: string;
  onPress: () => void;
}

export function CardGame({uri, onPress}: CardGameProps) {
  return (
    <Container onPress={onPress}>
      <CardImage source={{uri}} />
    </Container>
  );
}
