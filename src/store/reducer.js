import { useSelector } from 'react-redux';
import initialData from '../data/floors';

const INITIAL_STATE = { stackPlan: initialData, selected: false, selectedSpace: null };

const selectSpace = 'SELECT_SPACE';
const saveSpace = 'SAVE_SPACE';

const useSelected = () =>
  useSelector( state => state.selected);

const selectAction = spaceData => ({
  type: selectSpace,
  payload: spaceData
});

const saveSpaceAction = spaceData => ({
  type: saveSpace,
  payload: spaceData
});

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case selectSpace:
      return {
        ...state,
        selected: true,
        selectedSpace: {...payload}
      };
    case saveSpace:
    const { suite, totalSF, capacity } = payload;
    const updatedStackPlan = [...state.stackPlan];
    state.stackPlan.forEach((floor, floorIndex) => {
      if (floor.uuid === state.selectedSpace.floorId) {
        floor.spaces.forEach((space, spaceIndex) => {
          if (space.uuid === state.selectedSpace.spaceId) {
            updatedStackPlan[floorIndex].spaces[spaceIndex].suite_number = suite;
            updatedStackPlan[floorIndex].spaces[spaceIndex].total_area_size = totalSF;
            updatedStackPlan[floorIndex].spaces[spaceIndex].potential_capacity = capacity;
          }
        })
      }
    })
      return {
        ...state,
        stackPlan: [ ...updatedStackPlan ]
      };
    default:
      return state;
  }
};

export { selectAction, saveSpaceAction, useSelected, selectSpace, saveSpace };
export default reducer;