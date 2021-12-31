import React from 'react';

import {Container, Title} from './styles';

interface ChipSelectProps {
  onPress: () => void;
  title: string;
}

export function ChipSelect({onPress, title, ...rest}: ChipSelectProps) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
