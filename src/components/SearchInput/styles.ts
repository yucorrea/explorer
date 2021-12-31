import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  padding: ${Platform.OS === 'ios' ? 13 : 8}px 16px;
  background: #403e45;
  border-radius: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableWithoutFeedback``;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #efefef;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;
