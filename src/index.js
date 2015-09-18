export default (actionToReducerMap) => {
  return function switchAction(state, action = {}) {
    const reducer = actionToReducerMap[action.type];

    if (reducer) {
      let thisContext;
      if (!action.hasOwnProperty('meta') && !action.hasOwnProperty('error')) {
        thisContext = this;
      } else if (!action.hasOwnProperty('meta')) {
        thisContext = {...this, error: action.error};
      } else if (!action.hasOwnProperty('error')) {
        thisContext = {...this, meta: action.meta};
      } else {
        thisContext = {...this, meta: action.meta, error: action.error};
      }

      return thisContext::reducer(state, action.payload);
    }

    return state;
  };
};
