/** ============================================================
 * Define Actions
 * =============================================================
 */

/** ============================================================
 * Define Initial State
 * =============================================================
 */
const initialState = {
  user: __PRELOADED_STATE__.user
};

/** ============================================================
 * Define Reducer
 * =============================================================
 */
export default (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

/** ============================================================
 * Action Creators
 * =============================================================
 */