import { init } from './actions/InitAction';
import { Action, State } from './Types';

function galaxyReducer(state: State, action: Action): State {
  const { type } = action
  switch (type) {
    case "INIT":
      const { data } = action
      return { ...state, boardMap: init(data) };
  }

  const THIS_SHOULDNT_HAPPEN: never = type
  return THIS_SHOULDNT_HAPPEN
}

export { galaxyReducer }
