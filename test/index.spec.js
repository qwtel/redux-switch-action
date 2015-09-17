import expect from 'expect';
import createSwitchAction from '../src';

describe('createSwitchAction', () => {
  it('should exist', () => {
    expect(typeof createSwitchAction !== 'undefined').toBe(true);
  });

  const ADD = 'ADD';
  const SUB = 'SUB';
  const OTHER = 'OTHER';
  const INC = 'INC';

  function addReducer(state, {amount}) {
    return state + amount;
  }

  function subReducer(state, {amount}) {
    return state - amount;
  }

  function incReducer(state) {
    return state + 1;
  }

  const switchAction = createSwitchAction({
    [ADD]: addReducer,
    [SUB]: subReducer,
    [INC]: incReducer,
  });

  it('should call a reducer according to an action type', () => {
    const addAction = {
      type: ADD,
      payload: {
        amount: 2,
      },
    };

    const subAction = {
      type: SUB,
      payload: {
        amount: 2,
      },
    };

    expect(switchAction(5, addAction)).toBe(7);
    expect(switchAction(5, subAction)).toBe(3);
  });

  it('should return the state for an unknown action', () => {
    const otherAction = {
      type: OTHER,
      payload: {
        other: 'data',
      },
    };

    expect(switchAction(5, otherAction)).toBe(5);
  });

  it('should accept actions without payload', () => {
    const incAction = {
      type: INC,
    };

    expect(switchAction(5, incAction)).toBe(6);
  });
});
