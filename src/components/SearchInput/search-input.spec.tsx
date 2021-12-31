import React from 'react';
import {render} from '@testing-library/react-native';
import {SearchInput} from '~/components/SearchInput';

describe('SearchInput', () => {
  it('should exist input search has placeholder', () => {
    const {getByTestId} = render(<SearchInput />);
    const searchInput = getByTestId('search-input');
    expect(searchInput.props.placeholder).toEqual('Pesquisar');
  });
});
