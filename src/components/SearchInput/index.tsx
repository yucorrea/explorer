import React, {useState} from 'react';
import {TextInputProps} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import useDebounce from '~/utils/debounce';

import {Container, Button, TextInput} from './styles';

interface SearchInputProps extends TextInputProps {
  onClearSearchText?: () => void;
}

export function SearchInput({
  value,
  onClearSearchText,
  onChangeText,
  ...rest
}: SearchInputProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChangeText, 500);

  function handleChange(text: string) {
    setDisplayValue(text);
    debouncedChange(text);
  }

  const onClear = () => {
    if (onClearSearchText) {
      onClearSearchText();
    }
    setDisplayValue('');
  };

  const isEditing = () => {
    return value !== '' ? (
      <Button onPress={onClear}>
        <Icon size={24} color="rgba(239,239,239,0.4)" name="x" />
      </Button>
    ) : (
      <Button disabled>
        <Icon size={24} color="rgba(239,239,239,0.4)" name="search" />
      </Button>
    );
  };

  return (
    <Container testID="container-search-input">
      <TextInput
        testID="search-input"
        value={displayValue}
        placeholderTextColor="#EFEFEF"
        placeholder="Pesquisar"
        {...rest}
        onChangeText={handleChange}
      />
      {isEditing()}
    </Container>
  );
}
