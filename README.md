Redux Switch Action
===================

Slightly more concise reducer switching for [Flux Standard Actions](https://github.com/acdlite/flux-standard-action).

Example
-------

```js
const switchAction = createSwitchAction({
  [ADD]: addReducer,
  [SUB]: subReducer,
});

export function reducer(state = 0, action) {
  return switchAction(state, action);
}

function addReducer(state, {payload}) {
  return state + payload.amount;
}

function subReducer(state, {payload}) {
  return state - payload.amount;
}
```

Instead of:

```js
export function reducer(state = 0, action) {
  switch (action.type) {
    case ADD: return addReducer(state, action);
    case SUB: return subReducer(state, action);
    default: return state;
  }
}
```
