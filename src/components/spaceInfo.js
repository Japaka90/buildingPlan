import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import spaceImg from '../img/roomPlan.png';
import Flex from '../ui-components/Flex';
import { saveSpaceAction, useSelected } from '../store/reducer';

const Wrapper = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  min-width: 544px;
  max-width: 674px;
  height: 620px;
`;

const BorderlessInput = styled.input`
  border: 0;
  outline:none;
  text-align: right;
`;

const StyledLabel = styled.span`
  color: #888888
`;

const StyledButton =  styled.button`
  color: #FFFFFF;
  background-color: #00BAC7;
  border: 0;
  width: 105px;
  height: 30px;

  &:hover {
    background-color: #52D0D9;
  }
`;

const UnderlinedBox = styled.div`
  border-bottom: 1px solid #E6E6E6;
  width: 254px;
  height: 23px;
`;

const Text = styled.span`
  font-size: ${props => props.size};
`;

const SpaceInfo = ({ suite, totalSF }) => {
  const [suiteState, suiteUpdate] = useState(suite);
  const [totalSFState, totalSFUpdate] = useState(totalSF);
  const dispatch = useDispatch();

  // только целое значение
  const countCapacity = totalSF => Math.floor(totalSF/8);

  const handleChangeSuite = e => {
    suiteUpdate(e.target.value)
  };

  const handleChangeTotalSF = e => {
    totalSFUpdate(e.target.value)
  };

  const selected = useSelected();

  const handleSave = () => {
    // обновляются данные для первого помещения и уходит запрос на бэк с этими данными
    // если по каким-то причинам нет выбранной комнаты в store, то ничего не происходит, только сообщение об ошибке (да, тут можно какую-то более сложную логику добавить)
    if(selected) {
      dispatch(saveSpaceAction({ suite: suiteState, totalSF: totalSFState, capacity: countCapacity(totalSFState) }));
    }
    else {
      alert('Не выбрано помещение. Выбирете помещение или вернитесь на главную страницу ');
    }
  }

  return (
    <Wrapper>
       <Flex direction="column" alignItems="center" margin="14px auto 0 auto" width="518px">
        <img src={spaceImg} alt="spacePlan" />      
        <Flex justify="space-between" margin="37px 0 0 0" width="100%">
          <UnderlinedBox>
            <StyledLabel>Suite</StyledLabel>
            <BorderlessInput value={suiteState} onChange={handleChangeSuite} />          
          </UnderlinedBox>
          <UnderlinedBox>
            <StyledLabel>Total sf</StyledLabel>
            <BorderlessInput value={totalSFState} onChange={handleChangeTotalSF} type="number" />
          </UnderlinedBox>             
        </Flex>
        <Flex direction="column" alignItems="center" margin="28px 0 0 0">
          <StyledLabel>Potential capacity</StyledLabel>
          <div>
            <Text size="48px">
              {countCapacity(totalSFState)}
              <Text size="14px"> heads</Text>
            </Text>
          </div>
        </Flex>
        <Flex width="100%">
          <StyledButton onClick={handleSave}>Save</StyledButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
}

export default SpaceInfo;

SpaceInfo.propTypes = {
  suite: PropTypes.string.isRequired,
  totalSF: PropTypes.number.isRequired
};