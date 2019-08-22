import React from 'react';
import PropTypes from 'prop-types';
import StackPlan from './stackPlan';
import SpaceInfo from './spaceInfo';
import Flex from '../ui-components/Flex';

const SelectedStackPlan = ({ suite, totalSF }) => {
  return (
    <Flex wrap="wrap" justify="space-evenly" margin="29px 0 0 0">
      <StackPlan />
      <SpaceInfo suite={suite} totalSF={totalSF} />
    </Flex>
  );
}

export default SelectedStackPlan;

SelectedStackPlan.propTypes = {
  suite: PropTypes.string,
  totalSF: PropTypes.number
};

SelectedStackPlan.defaultProps = {
  suite: 'f0126',
  totalSF: 280
};