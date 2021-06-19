import Vue from "vue";
import Vuex from "vuex";
import Task from "@/models/Task";
import * as _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [] as Task[],
    deleteTasks: [] as Task[],
    completeTasks: [] as Task[],
  },
  mutations: {
    setTask: (state, task) => state.tasks.push(task),

    deleteTask(state, task) {
      var taskIndex = _.findIndex(state.tasks, task);
      state.deleteTasks.push(state.tasks[taskIndex]);
      state.tasks.splice(taskIndex, ++taskIndex);
    },

    completeTask(state, task) {
      var taskIndex = _.findIndex(state.tasks, task);
      state.tasks[taskIndex].complete = true;
      state.completeTasks.push(task);
    },

    clearData(state) {
      state.tasks = [] as Task[];
      state.deleteTasks = [] as Task[];
      state.completeTasks = [] as Task[];
    },

    emptyTrash: (state) => (state.deleteTasks = []),
    undo(state, task) {
      var taskIndex = _.findIndex(state.deleteTasks, task);
      state.tasks.push(state.deleteTasks[taskIndex]);
      state.deleteTasks.splice(taskIndex, ++taskIndex);
    },
  },
  actions: {},
  modules: {},
});
