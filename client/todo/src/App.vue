<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <list-tasks :todos="todos" :title="title" @create="createTodo"></list-tasks>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ListTasks from './components/ListTasks'
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      errors: [],
      title: 'My Todos Tasks'
    }
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:5500/`)
      this.todos = response.data
    } catch (e) {
      this.errors.push(e)
    }
  },
  components: {
    HelloWorld,
    ListTasks
  },
  methods: {
    async createTodo (name) {
      try {
        const response = await axios.post(`http://localhost:5500/`, { name })
        this.todos.push(response.data);
      } catch (e) {
        this.errors.push(e)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
