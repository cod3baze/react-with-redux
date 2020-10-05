const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},

  modules: [
    {
      id: 1,
      title: "Iniciando com redux",
      lessons: [
        { id: 1, title: "primeira aula" },
        { id: 2, title: "primeira aula" },
      ],
    },
    {
      id: 2,
      title: "Aprendendo redux",
      lessons: [
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" },
      ],
    },
  ],
};

function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeModule: action.module,
      activeLesson: action.lesson,
    };
  }

  return state;
}

export default course;
