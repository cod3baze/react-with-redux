import { combineReducers } from "redux";

import course from "./course";

export default combineReducers({
  course,
});

/**
 * todo: ANTES
 * { modules: [], activeModule: {}, activeLesson: {} }
 * todo: DEPOIS
 * {
 *    course: {modules: [], activeModule: {}, activeLesson: {} }
 *    users: {...}
 * }
 */
