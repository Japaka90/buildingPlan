import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import notSelectedPlan from '../img/initialStackPlan.png';
import selectedPlan from '../img/selectedStackPlan.png';
import { selectAction, useSelected } from '../store/reducer';

const Wrapper = styled.div`  
  height: calc(100vh - 50px);
  overflow-y: scroll;
  margin-bottom: 20px;
  width: 674px;
`;

const StackPlan = () => {
  const dispatch = useDispatch();
  const selected = useSelected();
  const onClick = () => {
    // т.к. в упрощённом задании выбор комнаты происходит при клике на картинку,
    // то всегда будет выбираться одно и то же помещение (взяла самое первое).
    dispatch(selectAction({
      floorId: '1007e2cf-7792-4567-be79-fbf901bfb081', 
      spaceId: 'c4a8fc46-be8c-49b2-be78-b994a79e43c6'
    }))
  };
 
  return (
    <Wrapper>
      <Link to="/spaces/c4a8fc46-be8c-49b2-be78-b994a79e43c6">
        <img src={ selected ? selectedPlan : notSelectedPlan} onClick={onClick} alt="stackPlan" style={{marginBottom: "-5px"}}/>      
      </Link>
    </Wrapper>
  );
}

export default StackPlan;
