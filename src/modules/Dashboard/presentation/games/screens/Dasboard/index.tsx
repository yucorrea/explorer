import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useDispatch, useSelector} from 'react-redux';

import gamesSlice from '~/modules/Dashboard/presentation/games/redux/reducers/games.reducer';
import {
  gamesLoadingSelector,
  gamesSelector,
} from '~/modules/Dashboard/presentation/games/redux/selectors/games.selector';

import {SearchInput} from '~/components/SearchInput';
import {CardGame} from '../../components/CardGame';

import {genres} from '~/modules/Dashboard/presentation/games/mock/genres';

import {
  Screen,
  Container,
  Header,
  Title,
  SubTitleContainer,
  SubTitle,
  ListItem,
  FilterButton,
  FilterText,
  EmptyContainer,
  EmptyTitle,
  EmptySubTitle,
} from './styles';

export function Dashboard() {
  const [searchText, setSearchText] = useState('');

  const games = useSelector(gamesSelector);
  const loading = useSelector(gamesLoadingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gamesSlice.actions.gamesRequest(''));
  }, [dispatch]);

  const onChangeText = (text: string) => {
    setSearchText(text);
    dispatch(gamesSlice.actions.gamesRequest({searchText: text}));
  };

  const onClearText = () => {
    setSearchText('');
    dispatch(gamesSlice.actions.gamesRequest({searchText: ''}));
  };

  const renderItem = ({item}: any) => {
    return <ListItem title={item.title} onPress={() => {}} />;
  };

  const renderGameItem = ({item}: any) => {
    return <CardGame uri={item.banner} onPress={() => {}} />;
  };

  const renderGenres = () => {
    return (
      searchText.length > 0 && (
        <FlatList
          style={{marginTop: 27}}
          data={genres}
          keyExtractor={({id}) => id.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )
    );
  };

  const renderHeader = (
    <Header>
      <Title>Explorar</Title>
      <SearchInput
        testID="search-input"
        value={searchText}
        onChangeText={onChangeText}
        onClearSearchText={onClearText}
      />

      {renderGenres()}

      <SubTitleContainer>
        <SubTitle>Lançamentos</SubTitle>

        <FilterButton>
          <Icon size={24} color="rgba(255,255,255,0.4)" name="filter" />
          <FilterText>Filtrar</FilterText>
        </FilterButton>
      </SubTitleContainer>
    </Header>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <Container>
          <ActivityIndicator size="large" color="rgba(255, 255, 255, 0.4)" />
        </Container>
      );
    }

    if (!games?.length) {
      return (
        <EmptyContainer>
          <EmptyTitle>Nada por aqui</EmptyTitle>
          <EmptySubTitle numberOfLines={1}>
            Não foi possível encontrar nada
          </EmptySubTitle>
        </EmptyContainer>
      );
    }

    if (!loading && games?.length > 0) {
      return (
        <Container>
          <FlatList
            data={games}
            keyExtractor={item => item.id.toString()}
            renderItem={renderGameItem}
            numColumns={2}
            contentContainerStyle={{
              paddingHorizontal: 16,
            }}
          />
        </Container>
      );
    }
  };

  return (
    <Screen>
      {renderHeader}
      {renderContent()}
    </Screen>
  );
}
