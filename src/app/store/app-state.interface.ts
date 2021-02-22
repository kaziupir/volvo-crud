import { UserState } from './users/reducers/user.reducers';
import { USER_FEATURE_SELECTOR } from './users/selectors/user.selectors';

export interface AppState {
  readonly [USER_FEATURE_SELECTOR]: UserState;
}
