import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  margin: ${props => props.margin};
  width: ${props => props.width};
`;

export default Flex;