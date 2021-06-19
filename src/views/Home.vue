<template>
  <div class="home">
    <div class="row">
        <div class="small-12 text-center">
            <h4>Vue.js TypeScript Todo App</h4>
            <input v-model="taskName" placeholder="task name">
            <button @click="addTask" type="submit">Add</button>
            <button @click="resetData">Reset</button>
        </div>
    </div>
    <br>
    <div class="row align-center">
      Tasks
      <p v-for="(task, i) in tasks" :key="task.name">
        Task: {{ task.name }} | Action: {{ task.complete ? 'isDone' : 'isTodo' }} | 
        <button @click="setTaskComplete(task)">Done</button>
        <button @click.prevent="deleteTask(task)">Delete</button>
      </p>
      <br>
      
    </div>
  </div>
</template>

<script lang="ts">
import Task from "@/models/Task"
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src

@Component({
  name: 'HomePage',
  components: {},
})


export default class Home extends Vue {

  // input
  taskName: string = "";

  tasks: Array<Object> = [] as Task[];
  deleteTasks: Array<Object> = [] as Task[];
  completeTasks: Array<Object> = [] as Task[];

  addTask() {
    if (this.taskName !== "") {
      const newTask = new Task(this.taskName);
      this.$store.commit('setTask', newTask);
      this.taskName = "";
    }
  }
  setTaskComplete(task: Task) {
    this.$store.commit('completeTask', task);
    this.completeTasks.push(task);
  }

  deleteTask(task: Task) {
    this.$store.commit('deleteTask', task);
  }

  resetData() {
    this.$store.commit('clearData');
  }

  mounted() {
    this.tasks = this.$store.state.tasks;
    this.deleteTasks = this.$store.state.deleteTasks;
    this.completeTasks = this.$store.state.completeTasks;
  }
}

</script>
