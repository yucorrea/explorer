import styled from 'styled-components/native';
import {ChipSelect} from '~/modules/Dashboard/components/ChipSelect';

export const Screen = styled.SafeAreaView`
  flex: 1;
  background: #222125;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Poppins-SemiBold';
  color: #fff;
  margin-bottom: 34px;
`;

export const SubTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
  color: rgba(255, 255, 255, 0.8);
`;

export const ListItem = styled(ChipSelect)`
  margin-right: 16px;
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const FilterText = styled.Text`
  color: rgba(255, 255, 255, 0.4);
  font-family: 'Poppins-Regular';
  font-size: 14px;
  margin-left: 4px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyTitle = styled(Title)`
  margin: 0;
`;

export const EmptySubTitle = styled(Title)`
  font-size: 16px;
  font-family: 'Poppins-Regular';
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.8);
`;
