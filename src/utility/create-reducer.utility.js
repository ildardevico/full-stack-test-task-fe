export function createReducer(handlers, initialState = null) {
  return (state = initialState, action) => {
    if (Reflect.has(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
